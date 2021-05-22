import { Flex, IconButton, Icon, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
  const { onOpen } = useSidebarDrawer();
  // Hook do Chakra para controlar breakpoints na aplicação
  // Se estiver na versão larga da tela (web)
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header" // Tag header .:. Mutação do HTML
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto" // Margin horizontal
      mt="4" // Margin top
      px="6" // Padding horizontal
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex
        align="center"
        ml="auto" // Margin left auto: dá o maior espaço para ser jogado ao máximo para a direita
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
