import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

function Card({ name, image }: { name: string; image: any }) {
  return (
    <Box
      _hover={{ boxShadow: "dark-lg" }}
      bg="#feffdf"
      backgroundImage='linear-gradient(to bottom right, #feffdf, #ffe79a)'
      w="160px"
      h="200px"
      borderRadius='lg'
      borderWidth='medium'
      borderColor='#8dc6ff'
    >
      <Text align="center" fontWeight='bold'>{name}</Text>
      <Image src={image} alt="pokemons" display='block' marginLeft='auto' marginRight='auto' marginTop={4} minH='130px' width='auto'/>
    </Box>
  );
}

export default Card;
