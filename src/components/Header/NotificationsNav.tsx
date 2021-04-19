import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

function NotificationsNav() {
  /**
   * O Stack por padrão é sempre vertical.
   * Podemos passar a propriedade 'direction'
   * Para encurtar isto, podeusar o 'HStack' - Horizontal Stack
   * para que o itens fiquem um ao lado do outro
   */
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}

export default NotificationsNav;
