import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type Data = {
  users: User[];
};

type getUsersResponse = {
  users: User[];
  totalCount: number;
};

export async function getUsers(page: number): Promise<getUsersResponse> {
  const { data, headers } = await api.get<Data>('users', {
    params: {
      page
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }));

  return {
    users,
    totalCount
  };
}

export function useUsers(page: number) {
  /**
   * O react-query cria um cache temporário sempre que uma requisição HTTP é feita pelo BE
   * Este cache é mapeado a partir de algumas chaves
   * Estratégia: Stale While Revalidate
   * Mantém em cache no FE pelas chaves(params) 'users' e {page}
   *    Se uma dessas chaves mudar, os dados são recarregados
   */
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10 // Para dizer que durante este tempo, a aplicação não precisa fazer uma nova requisição HTTP, pois os dados estão "frescos"
  });
}
