import { Box, Heading, Text, Image, Stack, Button, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box bg="yellow.50" minH="100vh" p={4}>
      <Stack spacing={8} maxW="800px" mx="auto" textAlign="center">
        <Heading as="h1" size="2xl" color="red.600">
          About A Huevo Tacos
        </Heading>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/mexican-restaurant-front"
          alt="A Huevo Tacos Front"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" color="gray.700">
          Welcome to A Huevo Tacos, your go-to spot for authentic Mexican flavors in Allentown, PA! 
          Our vibrant and welcoming atmosphere, paired with our delicious tacos and traditional 
          Mexican dishes, will transport you straight to the heart of Mexico.
        </Text>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/authentic-mexican-food"
          alt="Authentic Mexican Food"
          width="100%"
          height="250px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" color="gray.700">
          We take pride in using the freshest ingredients and time-honored recipes to bring you 
          the best tacos in town. Whether you're craving classic street tacos, sizzling fajitas, 
          or refreshing aguas frescas, we have something for everyone.
        </Text>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/taco-chef"
          alt="Our Chef Preparing Tacos"
          width="100%"
          height="250px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" color="gray.700">
          Come visit us at:
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="red.600">
          365 W Whitehall St, Allentown, PA 18102
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="red.600">
          (610) 214-2210
        </Text>
        <Flex justify="center" gap={4} wrap="wrap">
          <Button as={RouterLink} to="/" colorScheme="red" size="lg">
            Home
          </Button>
          <Button as={RouterLink} to="/menu" colorScheme="yellow" size="lg">
            View Menu
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="red" size="lg">
            Visit Us
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default About;