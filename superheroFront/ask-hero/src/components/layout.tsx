import { ChakraProvider, Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Header() {
  return (
    <Flex align="center" justify="space-between" p={4} bg="#3454D1">
      <Box>
        <Heading as="h1" size="lg" color="white">
            Ask-Hero
        </Heading>
      </Box>
      <Flex align="center">
        <Button as={NextLink} href="/Accueil" variant="ghost" bg="#666666" mr={10}>
          Accueil
        </Button>
        <Button as={NextLink} href="/Heros" variant="ghost" bg="#666666" mr={10}>
          Heros
        </Button>
        <Button as={NextLink} href="/Panier" variant="ghost" bg="#666666" mr={10}>
          Panier
        </Button>
        <Spacer />
        <Button as={NextLink} href="/" variant="ghost" bg="#666666">
          Déconnexion
        </Button>
      </Flex>
    </Flex>
  );
};

export function Layout({ children }) {
  return (
    <ChakraProvider>
      <Header />
      <Box p={0}>{children}</Box>
    </ChakraProvider>
  );
};
