import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Erikson Gonçalves</Text>
          <Text color="gray.300" fontSize="small">
            eriksongoncalves@yahoo.com.br
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Erikson Gonçalves"
        src="https://xesque.rocketseat.dev/users/avatar/profile-6a00655f-3c96-45a1-a42f-900d3280c0c2-1597068438331.jpg"
      />
    </Flex>
  );
}

export default Profile;
