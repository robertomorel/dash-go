import { ReactNode } from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';

type NavSectionProps = {
  title: string;
  children: ReactNode;
};

function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}

export default NavSection;
