import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export function MainContent() {
  return (
    <Box minH={"100%"} minW={"90%"} p={3}>
      <VStack align={"center"}>
        <Heading as={"h2"} size={"lg"}>
          Radio 24/7's Documentation
        </Heading>
        <Text>Coming Soon</Text>
      </VStack>
    </Box>
  );
}
