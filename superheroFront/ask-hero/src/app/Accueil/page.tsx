/* eslint-disable react/no-unescaped-entities */

import { Layout } from '@/components/layout';
import { Box, Flex, Heading, Text, layout } from '@chakra-ui/react';

function Home() {
  return (
    <Layout>
        <Flex
        align="center"
        justify="center"
        h="100vh"
        bg="#fff"
        color="#3454D1"
        >
        <Box p={8} maxW="600px">
            <Heading mb={4} fontSize="3xl">
            Bienvenue chez Ask-Hero
            </Heading>
            <Text fontSize="lg">
            Ask-Hero est votre agence de super-héros dévouée à vous fournir des solutions
            héroïques pour tous vos besoins. Que ce soit pour sauver le monde ou simplement
            résoudre vos problèmes quotidiens, nos super-héros sont là pour vous.
            </Text>
        </Box>

        <Box p={8} maxW="400px" bg="#3454D1" color="#fff">
            <Heading mb={4} fontSize="2xl">
            Nos Retours Clients
            </Heading>
            <Text>
            "Ask-Hero a vraiment sauvé ma journée! Leur équipe de super-héros est incroyablement
            efficace et sympathique."
            </Text>
        </Box>
        </Flex>
    </Layout>
  );
};

export default Home;
