import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';

/**
 * Precizaremos criar um contexto para compartilhar a informação da sidebar aberta ou não
 * entre a sidebar e o header, que é onde podemos abrir a sidebar em si
 */

type SidebarDrawerContextData = UseDisclosureReturn;

type ProviderProps = {
  children: ReactNode;
};

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: ProviderProps) {
  // Hook do Chakra com informações e funções úteis para o Drawer
  const disclosure = useDisclosure();
  const router = useRouter();

  /**
   * Este useEffect é necessário para que toda vez que a rota mudar,
   * identificada pelo router.asPath(url), o Drawer deve ser fechado
   */
  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

// Criando o contexto em si em forma de hook
export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
