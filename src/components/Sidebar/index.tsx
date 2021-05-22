import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import SidebarNav from './SidebarNav';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();
  // Hook do Chakra para controlar breakpoints na aplicação
  // Se estiver na versão curta da tela (mobile)
  const isDrawerSidevar = useBreakpointValue({
    base: true,
    lg: false
  });

  // Se estiver na versão mobile, irá mostrar o Drawer
  if (isDrawerSidevar) {
    return (
      <Drawer
        isOpen={isOpen} // Definir se está aberto ou não
        placement="left" // Onde queremos que o menu esteja
        onClose={onClose} // O que rodar qndo o usuário requisitar para fechar
      >
        <DrawerOverlay /** Cmoponente para deixar a tela mais escura */>
          <DrawerContent
            bg="gray.800"
            p="4" /** Onde fica o conteúdo da sitebar */
          >
            <DrawerCloseButton mt="6" /** Botão para fechar a sidebar */ />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  // Se estiver na versão web, irá mostrar a site bar sempre
  return (
    <Box as="aside" w="64" mr="8">
      {/** Tag aside */}
      <SidebarNav />
    </Box>
  );
}
