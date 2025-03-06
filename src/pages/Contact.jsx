import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, Link, Icon, HStack, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="red.500">
          Contact A Huevo Tacos
        </Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/contact" 
          alt="Contact A Huevo Tacos" 
          width="100%" 
          height="200px" 
          objectFit="cover" 
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="lg" color="yellow.600">
            365 W Whitehall St, Allentown, PA 18102
          </Text>
          <Text fontSize="lg" color="yellow.600">
            Phone: <Link href="tel:+16102142210" color="red.500">(610) 214-2210</Link>
          </Text>
          <Text fontSize="lg" color="yellow.600">
            Email: <Link href="mailto:contact@ahuevotacos.com" color="red.500">contact@ahuevotacos.com</Link>
          </Text>
        </Box>

        <HStack justify="center" spacing={6}>
          <Link href="https://facebook.com" isExternal color="red.500">
            <Icon as={FaFacebook} boxSize={8} />
          </Link>
          <Link href="https://instagram.com" isExternal color="red.500">
            <Icon as={FaInstagram} boxSize={8} />
          </Link>
          <Link href="https://twitter.com" isExternal color="red.500">
            <Icon as={FaTwitter} boxSize={8} />
          </Link>
        </HStack>

        <Box as="form" bg="yellow.100" p={6} borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="red" width="full">
              Send Message
            </Button>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md" color="red.500">
            Visit Us
          </Heading>
          <Image 
            src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/location" 
            alt="A Huevo Tacos Location" 
            width="100%" 
            height="200px" 
            objectFit="cover" 
            borderRadius="md"
          />
          <Button as={RouterLink} to="/visit" colorScheme="yellow" mt={4}>
            Get Directions
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;