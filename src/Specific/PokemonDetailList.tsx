import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import PokemonType from "./PokemonType";
import PokemonAbility from "./PokemonAbility";
import PokemonMove from "./PokemonMove";

const PokemonDetailList = ({
  pokeAbi,
  myImage,
  pokeType,
  pokeMove,
}: {
  pokeAbi: any;
  myImage: any;
  pokeType: any;
  pokeMove: any;
}) => {
  return (
    <Box minWidth="80vw" minHeight='100vh' borderWidth="1px" borderRadius="lg">
      <Flex direction="column" align="center" padding={10}>
        <Image src={myImage} alt="Pokemon chosen" boxSize="200px" />
        <Flex align="center" mt={4}>
          <Text as="b" marginRight={4}>
            Types:{" "}
          </Text>
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
                <PokemonAbility ability={pokeAbi[i].ability} />{" "}
              </Box>
            );
          })}
        </Flex>

        <Flex align="center" mt={4} direction='column' >
          <Text as="b" marginY={8}>
            Moves:{" "}
          </Text>
          <Flex flexWrap="wrap" justifyContent='center'>
            {pokeMove.map((user: any, i: number) => {
              return (
                <Box key={i} id={pokeMove.id}>
                  <PokemonMove move={pokeMove[i].move} />{" "}
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PokemonDetailList;
