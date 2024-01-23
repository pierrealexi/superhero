
'use client'
import { Box, Grid, Heading, Image, Text, Button } from '@chakra-ui/react';
import { Layout } from '@/components/layout';

function Heros() {
  const heroesData = [
    {
      id: 1,
      name: 'SpiderMan',
      description:
        'Spider-Man, alias Peter Parker, est un super-héros Marvel doté de pouvoirs arachnéens. Évoluant à New York, il utilise sa toile et son agilité exceptionnelle pour combattre le crime. Son humour et son sens de la responsabilité en font un héros emblématique, prêt à affronter tous les défis pour défendre la justice',
      price: '$450',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/2560px-Spiderman.JPG',
    },
    {
        id: 1,
        name: 'Batman',
        description:
          'Ce héros est parfait pour les espaces tropicaux modernes, les espaces inspirés du baroBatman, aussi connu sous le nom de Bruce Wayne, est un justicier de Gotham City. Dépourvu de pouvoirs surhumains, il utilise son intelligence exceptionnelle, ses compétences en arts martiaux et une panoplie de gadgets high-tech pour lutter contre le crime.que, les espaces aux tons terreux et pour les personnes qui aiment un design chic avec une touche de vintage.',
        price: '$450',
        image:
          'https://s.isanook.com/mv/0/ud/24/121917/121917-thumbnail.jpg?ip/crop/w670h402/q80/jpg',
      },
      {
        id: 1,
        name: 'Superman',
        description:
          `Superman, alias Clark Kent, est un extraterrestre doté de super-pouvoirs, dont une force surhumaine et la capacité de voler. En tant que défenseur de la vérité et de la justice, il incarne l'espoir et la puissance au service du bien.`,
        price: '$450',
        image:
          'https://fr.web.img6.acsta.net/newsv7/21/02/26/18/51/4272278.jpg',
      },
      {
        id: 1,
        name: 'Iron Man',
        description:
          `Iron Man, ou Tony Stark, est un génie milliardaire et inventeur. Équipé d'une armure technologique de pointe, il combat le crime et les menaces mondiales. Son intelligence, son humour sarcastique et sa détermination en font un super-héros unique.`,
        price: '$450',
        image:
          `https://static.printler.com/cache/4/e/f/2/f/9/4ef2f983834bdcf676c44dad74b16c0d7270c40f.jpg`  },
      {
        id: 1,
        name: 'Hulk',
        description:
          `Hulk, le Dr Bruce Banner lorsqu'il se transforme, est un géant vert surpuissant doté d'une force colossale. Sa transformation est déclenchée par la colère, et il devient un agent de destruction massive au service du bien.`,
        price: '$450',
        image:
          `https://www.gamereactor.fr/media/47/_4124713b.jpg`,
      },
      {
        id: 1,
        name: 'Captain America',
        description:
          `Captain America, alias Steve Rogers, est un super-soldat au service de l'Amérique. Grâce à un sérum expérimental, il possède une force physique et une agilité exceptionnelles. Armé de son bouclier indestructible, il incarne les valeurs de l'héroïsme et du patriotisme.`,
        price: '$450',
        image:
          `https://static.miraheze.org/fictionwiki/a/a3/Captain-america-bouclier-skin-arme-fortnite.jpg`      },
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
