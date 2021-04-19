import Head from 'next/head';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
});

function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Dash-Go</title>
      </Head>

      {/* Flex do Chakra com width=100% height=100% */}
      <Flex w="100vw" h="100vh" align="center" justify="center">
        {/* Flex do tipo form .:. Todo <Flex> é uma div */}
        <Flex
          as="form"
          w="100%"
          maxWidth="360px"
          bg="gray.800"
          p="8" // padding de 8 (medida do chakra) -> 2rem ou 32px
          borderRadius="8" // 8px
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          {/* Usado quando temos uma pilha de elementos que há espaçamento entre eles */}
          <Stack spacing="4" /* 4 u.chakra */>
            <Input
              type="email"
              label="E-mail"
              error={formState.errors.email}
              {...register('email')}
            />

            <Input
              type="password"
              label="Senha"
              error={formState.errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="6" // margin-top de 6 (medida do chakra) -> 24px
            colorScheme="pink"
            size="lg" // size = large do chakra
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default SignIn;
