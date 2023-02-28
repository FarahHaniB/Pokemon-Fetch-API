import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

function Card({ name, image }: { name: string; image: any }) {
  return (
    <Box
      _hover={{ boxShadow: "dark-lg" }}
      bg="lightblue"
      w="100px"
      h="150px"
      borderRadius="md"
    >
      <Text align="center">{name}</Text>
      <Image src={image} alt="pokemons" />
    </Box>
  );
}

export default Card;
