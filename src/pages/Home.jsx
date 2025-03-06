import { Box, Button, Flex, Heading, Image, Stack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="yellow.400" minH="100vh" p={4}>
      {/* Hero Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" py={10}>
        <Box flex="1" textAlign={{ base: "center", md: "left" }} p={5}>
          <Heading as="h1" size="2xl" color="red.600">
            A Huevo Tacos
          </Heading>
          <Text fontSize="xl" color="gray.700" mt={4}>
            Authentic Mexican flavors, made fresh every day.
          </Text>
          <Stack direction="row" spacing={4} mt={6} justify={{ base: "center", md: "flex-start" }}>
            <Button as={RouterLink} to="/menu" colorScheme="red" size="lg">
              View Menu
            </Button>
            <Button as={RouterLink} to="/visit" colorScheme="yellow" size="lg">
              Visit Us
            </Button>
          </Stack>
        </Box>
        <Box flex="1">
          <Image
            src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/delicious-mexican-tacos"
            alt="Delicious Mexican Tacos"
            borderRadius="md"
            width="100%"
            height="300px"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* About Section */}
      <Flex direction={{ base: "column-reverse", md: "row" }} align="center" justify="center" py={10}>
        <Box flex="1">
          <Image
            src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/authentic-mexican-restaurant"
            alt="Authentic Mexican Restaurant"
            borderRadius="md"
            width="100%"
            height="300px"
            objectFit="cover"
          />
        </Box>
        <Box flex="1" textAlign={{ base: "center", md: "left" }} p={5}>
          <Heading as="h2" size="xl" color="red.600">
            Authentic Mexican Experience
          </Heading>
          <Text fontSize="lg" color="gray.700" mt={4}>
            We bring the heart of Mexico to every dish we serve. Experience the bold flavors, fresh ingredients, and warm hospitality.
          </Text>
          <Button as={RouterLink} to="/about" colorScheme="red" size="lg" mt={4}>
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Contact Section */}
      <Box textAlign="center" py={10}>
        <Heading as="h2" size="xl" color="red.600">
          Visit Us
        </Heading>
        <Text fontSize="lg" color="gray.700" mt={2}>
          365 W Whitehall St, Allentown, PA 18102
        </Text>
        <Text fontSize="lg" color="gray.700" mt={1}>
          (610) 214-2210
        </Text>
        <Button as={RouterLink} to="/contact" colorScheme="yellow" size="lg" mt={4}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;