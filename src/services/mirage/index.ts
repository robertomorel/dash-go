/**
 * Provê uma forma de conseguir o funcionamento de uma API enquanto não temos ainda o Backend
 */
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer
} from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

// Função para contruir um servidor
export function makeServer() {
  // Cria um servidor
  const server = createServer({
    /**
     * ActiveModelSerializer: para mandar e receber requisições com dados de relacionamento num mesmo envio.
     * Cadastrar user com relacionamento: {name: 'Roberto', email: 'email@email.com', address: {street: 'r1', num: '1'}}
     */
    serializers: {
      application: ActiveModelSerializer
    },

    // Tipo de dados que queremos armazenar
    // O 'Partial' (typescript) é usado para informarmos que nem sempre precisaremos de todas as informações do Model
    models: {
      user: Model.extend<Partial<User>>({})
    },

    // Auxilia na geração de dados em massa
    factories: {
      //Model que será criado a factory
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },

        email() {
          // Usando o faker para gerar emails aleatórios
          return faker.internet.email().toLocaleLowerCase();
        },

        createdAt() {
          // Usando o faker para gerar datas recentes aleatórias dentro de 10 dias
          return faker.date.recent(10);
        }
      })
    },

    // Cria dados automaticamente assim que o servidor do mirajejs é inicializado
    seeds(server) {
      // Vamos criar 200 usuários segundo padrão visto no factories
      server.createList('user', 200);
    },

    routes() {
      // localhost:3000/api/
      this.namespace = 'api';
      // Faz com que toda a chamada para o mirajejs demore 750ms (testes de spinner)
      this.timing = 750;

      this.get('/users', function (schema, request) {
        /**
         * page: qual a página
         * per_page: quantos registros por página
         */
        const { page = 1, per_page = 10 } = request.queryParams;

        // Pegar todos os dados de um model (schema.all)
        const total = schema.all('user').length;
        // Onde começa o registro por página
        const pageStart = (Number(page) - 1) * Number(per_page);
        // Onde termina o registro por página
        const pageEnd = pageStart + Number(per_page);
        // Passa pelo processo de serialização do mirage
        const users = this.serialize(schema.all('user'))
          .users.sort(
            (a: User, b: User) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(pageStart, pageEnd);

        /**
         * Criando novo response para retorno.
         * Estamos retornando duas informações: total e users
         * 'total': é um metadado, assim, a doc do mirage indica retornar esta informação no header
         *     Não faz parte diretamente do corpo da resposta
         *     'x-total-count': nome padrão de número total de reg. para paginação
         * 'users': é a informação que deve ficar no body da response
         */
        return new Response(200, { 'x-total-count': String(total) }, { users });
      });

      this.get('/users/:id');
      this.post('/users');

      // Forçar o namespace para '' após a definição das rotas acima para não prejudicar
      // as rotas padrão que existem no NextJS, quando usamos a estratégia de utilizar
      // a pasta /pages/api
      this.namespace = '';
      // Todas as chamadas para /api passam para o mirajejs e caso não haja a rota pelo
      // próprio mirajejs, repassa adiante, para a rota original do API Root
      this.passthrough();
    }
  });

  return server;
}
