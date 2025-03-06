import { Box, Text, Image, VStack, HStack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="red.600">
          Visit A Huevo Tacos
        </Text>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/a-huevo-tacos/restaurant-exterior" 
          alt="A Huevo Tacos Exterior" 
          width="100%" 
          maxW="800px" 
          height="400px" 
          objectFit="cover" 
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="600px">
          Experience the authentic taste of Mexico right here in Allentown, PA. Visit us for fresh, flavorful tacos and a warm, inviting atmosphere.
        </Text>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} align="center">
        <HStack spacing={4} align="center">
          <Icon as={FaMapMarkerAlt} boxSize={6} color="red.500" />
          <Text fontSize="lg" fontWeight="bold">365 W Whitehall St, Allentown, PA 18102</Text>
        </HStack>
        <HStack spacing={4} align="center">
          <Icon as={FaPhoneAlt} boxSize={6} color="red.500" />
          <Text fontSize="lg" fontWeight="bold">(610) 214-2210</Text>
        </HStack>
        <HStack spacing={4} align="center">
          <Icon as={FaClock} boxSize={6} color="red.500" />
          <VStack spacing={1} align="center">
            <Text fontSize="lg" fontWeight="bold">Hours of Operation</Text>
            <Text>Monday - Thursday: 11:00 AM - 9:00 PM</Text>
            <Text>Friday - Saturday: 11:00 AM - 10:00 PM</Text>
            <Text>Sunday: Closed</Text>
          </VStack>
        </HStack>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="yellow.600">
          Find Us on the Map
        </Text>
        <Box width="100%" maxW="800px">
          <iframe
            title="A Huevo Tacos Location"
            width="100%"
            height="400px"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=365+W+Whitehall+St,+Allentown,+PA+18102"
          />
        </Box>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="red.600">
          Explore More
        </Text>
        <HStack spacing={6}>
          <Link as={RouterLink} to="/" fontSize="lg" fontWeight="bold" color="yellow.600">
            Home
          </Link>
          <Link as={RouterLink} to="/menu" fontSize="lg" fontWeight="bold" color="yellow.600">
            Menu
          </Link>
          <Link as={RouterLink} to="/about" fontSize="lg" fontWeight="bold" color="yellow.600">
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" fontSize="lg" fontWeight="bold" color="yellow.600">
            Contact
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;