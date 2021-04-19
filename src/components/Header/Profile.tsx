import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

function Profile({ showProfileData }: ProfileProps) {
  /**
   * Box é uma div sem estilização
   */
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Roberto Morel</Text>
          <Text color="gray.300" fontSize="small">
            game.developer.br@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Roberto Morel"
        src="https://avatars.githubusercontent.com/u/49918342?s=400&u=8d5765a21f6b67e45735501315b98f5da3fff7d2&v=4"
      />
    </Flex>
  );
}

export default Profile;
