import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function PokemonMove({ move }: { move: string[] }) {
  return (
    <Box p="8px" m="5px" minWidth='130px' bg="#ffebbb" borderRadius="md">
      <Text align="center">{move}</Text>
    </Box>
  );
}

export default PokemonMove;
