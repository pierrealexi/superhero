
'use client'
import { Box, Grid, Heading, Image, Text, Button } from '@chakra-ui/react';
import { Layout } from '@/components/layout';

function Heros() {
  const heroesData = [
    {
      id: 1,
      name: 'Héros 1',
      description:
        'Ce héros est parfait pour les espaces tropicaux modernes, les espaces inspirés du baroque, les espaces aux tons terreux et pour les personnes qui aiment un design chic avec une touche de vintage.',
      price: '$450',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 1,
        name: 'Héros 1',
        description:
          'Ce héros est parfait pour les espaces tropicaux modernes, les espaces inspirés du baroque, les espaces aux tons terreux et pour les personnes qui aiment un design chic avec une touche de vintage.',
        price: '$450',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: 1,
        name: 'Héros 1',
        description:
          'Ce héros est parfait pour les espaces tropicaux modernes, les espaces inspirés du baroque, les espaces aux tons terreux et pour les personnes qui aiment un design chic avec une touche de vintage.',
        price: '$450',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: 1,
        name: 'Héros 1',
        description:
          'Ce héros est parfait pour les espaces tropicaux modernes, les espaces inspirés du baroque, les espaces aux tons terreux et pour les personnes qui aiment un design chic avec une touche de vintage.',
        price: '$450',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: 1,
        name: 'Héros 1',
        description:
          'Ce héros est parfait pour les espaces tropicaux modernes, les espaces inspirés du baroque, les espaces aux tons terreux et pour les personnes qui aiment un design chic avec une touche de vintage.',
        price: '$450',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      },
      {
        id: 1,
        name: 'Héros 1',
        description:
          'Ce héros est parfait pour les espaces tropicaux modernes, les espaces inspirés du baroque, les espaces aux tons terreux et pour les personnes qui aiment un design chic avec une touche de vintage.',
        price: '$450',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      },
  ];

  const addToCart = (hero:any) => {
    console.log(`Ajouté au panier: ${hero.name}`);
  };

  return (

    <Layout>
        <Box p={8}>
            <Heading mb={4} fontSize="3xl">
                Nos Super-Héros
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {heroesData.map((hero) => (
                <Box key={hero.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image
                    src={hero.image}
                    alt={hero.name}
                    borderTopRadius="lg"
                    boxSize="200px"
                    objectFit="cover"
                    />
                    <Box p={4}>
                    <Heading size="md">{hero.name}</Heading>
                    <Text>{hero.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                        {hero.price}
                    </Text>
                    <Button mt={4} colorScheme="blue" onClick={() => addToCart(hero)}>
                        Ajouter au Panier
                    </Button>
                    </Box>
                </Box>
                ))}
            </Grid>
        </Box>
    </Layout>
  );
};

export default Heros;
