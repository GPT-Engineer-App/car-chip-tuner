import { Container, Box, Heading, Text, VStack, HStack, Button, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { FaCar, FaTools, FaThumbsUp } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Hero Section */}
      <Box as="section" textAlign="center" py={20} bg="gray.100" borderRadius="md">
        <Heading as="h1" size="2xl" mb={4}>Car Chip Tuning & Coding Services</Heading>
        <Text fontSize="lg" mb={6}>Unlock the full potential of your vehicle with our expert tuning and coding services.</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Box>

      {/* Services Section */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Our Services</Heading>
        <HStack spacing={10} justify="center">
          <VStack spacing={4} align="center">
            <FaCar size="3em" />
            <Heading as="h3" size="md">Performance Tuning</Heading>
            <Text textAlign="center">Enhance your car's performance with our state-of-the-art tuning solutions.</Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaTools size="3em" />
            <Heading as="h3" size="md">Diagnostic Services</Heading>
            <Text textAlign="center">Accurate diagnostics to identify and fix issues quickly and efficiently.</Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaThumbsUp size="3em" />
            <Heading as="h3" size="md">Customer Satisfaction</Heading>
            <Text textAlign="center">We prioritize customer satisfaction with top-notch service and support.</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Testimonials Section */}
      <Box as="section" py={20} bg="gray.100" borderRadius="md">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>What Our Clients Say</Heading>
        <VStack spacing={10}>
          <Box textAlign="center">
            <Text fontSize="lg" fontStyle="italic">"Amazing service! My car runs smoother and faster than ever before."</Text>
            <Text fontWeight="bold" mt={2}>- John Doe</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="lg" fontStyle="italic">"Professional and efficient. Highly recommend their tuning services."</Text>
            <Text fontWeight="bold" mt={2}>- Jane Smith</Text>
          </Box>
        </VStack>
      </Box>

      {/* Contact Form Section */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Contact Us</Heading>
        <Box maxW="md" mx="auto">
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="blue" size="lg" width="full">Send Message</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;