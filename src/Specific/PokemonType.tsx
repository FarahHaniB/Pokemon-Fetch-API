import React from "react";
import { Box, Text } from "@chakra-ui/react";

function PokemonType({ type }: { type: string[] }) {
  return (
    <Box p="8px" m="5px" minWidth='120px' bg='#ffcbcb' borderRadius="md">
      <Text align="center">{type}</Text>
    </Box>
  );
}

export default PokemonType;
