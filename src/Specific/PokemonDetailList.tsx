import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import PokemonDetail from "./PokemonAbility";
import PokemonType from "./PokemonType";

const PokemonDetailList = ({
  pokeAbi,
  myImage,
  pokeType,
}: {
  pokeAbi: any;
  myImage: any;
  pokeType: any;
}) => {
  return (
    <Box minWidth="80vw" borderWidth="1px" borderRadius="lg">
      <Flex direction="column" h="80vh" align="center">
        <Image src={myImage} alt="Pokemon chosen" boxSize="200px" />
        <Flex align="center" mt={4}>
          <Text as="b" marginRight={4}>Types: </Text>
          {pokeType.map((user: any, i: number) => {
            return (
              <Box key={i} id={pokeType.id}>
                <PokemonType type={pokeType[i].type} />
              </Box>
            );
          })}
        </Flex>
        <Flex align="center" mt={4}>
          <Text as="b" marginRight={4}>
            Abilities:{" "}
          </Text>
          {pokeAbi.map((user: any, i: number) => {
            return (
              <Box key={i} id={pokeAbi.id}>
                <PokemonDetail ability={pokeAbi[i].ability} />{" "}
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PokemonDetailList;
