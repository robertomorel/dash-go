import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';

type SidebarDrawerContextData = UseDisclosureReturn;

type ProviderProps = {
  children: ReactNode;
};

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: ProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

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

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
