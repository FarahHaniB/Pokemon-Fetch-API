import React from "react";
import { Box, Text } from "@chakra-ui/react";

function PokemonAbility({ ability }: { ability: string[] }) {
  return (
    <Box p="8px" m="5px" minWidth='120px' bg="lightblue" borderRadius="md">
      <Text align="center">{ability}</Text>
    </Box>
  );
}

export default PokemonAbility;
