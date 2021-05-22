import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';

/**
 * Quando carregamos uma página, o Next faz este carregamento do HTML pelo servidor BE
 * que está rodando junto ao app, na camada intermediadora do Next.
 * Nesta camada, que roda em um processo Node, não existe a referência Window.
 *
 * O Chart utiliza o Window, logo, precisamos que ele funciona apenas dentro do browser
 * e não seja carregado no Next quando estiver fazendo o Server-Side Rendering
 *
 * Para isso, utilizamos o dynamic do Next, que é usando para lazy loading
 */
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false // Desliga o server-side rend.
});

import { Header, Sidebar } from '../components';

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }];

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Dash-Go</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
          <Sidebar />

          {/**
           * Componente do Chakra para habilitar o uso de grid simples
           *  flex="1" -> ocupar a largura que sobrar da side bar
           *  gap="4" -> cada linha e coluna da grid terá um espaçamento de 16 px
           *  minChildWidth="320px" -> todos os itens dentro da grid tem que ter, no mínimo 320px.
           *                           Caso a tela diminua ainda mais, uma coluna vai para baixo (responsividade)
           *  align="flex-start" -> iniciando conteúdo no início
           */}
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <Box
              p={['6', '8']} //Responsividade [mobile - web]
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>
              {/**
               * yarn add apexcharts react-apexcharts
               * Chart biblioteca de gráficos
               *  options -> configuraçõesdo gráfico
               *  series -> dados do gráfico
               */}
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            </Box>
            <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;
