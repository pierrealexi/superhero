// Header.tsx
'use client'
import { Box, Flex, Heading, Button, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ChakraProvider } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

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
        <Button variant="ghost" bg="#666666" mr={10} onClick={openCartModal}>
          Panier
        </Button>
        <Spacer />
        <Button as={NextLink} href="/" variant="ghost" bg="#666666">
          Déconnexion
        </Button>
      </Flex>

      <Modal isOpen={isCartModalOpen} onClose={closeCartModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mon Panier</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}


export function Layout({ children }) {
  return (
    <ChakraProvider>
      <Header />
      <Box p={0}>{children}</Box>
    </ChakraProvider>
  );
};
