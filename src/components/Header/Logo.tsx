import { Text } from '@chakra-ui/react';

function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight" // Deixa as fontes um pouco mais grudadas (-0.025em)
      w="64"
    >
      DashGo
      <Text
        as="span" // Cria um span o HTML
        ml="1" //Margin left 1
        color="pink.500"
      >
        .
      </Text>
    </Text>
  );
}

export default Logo;
