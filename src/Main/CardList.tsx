import React from "react";
import Card from "./Card";
import { Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CardList = ({ pokemons }: { pokemons: any }) => {
  const navigate = useNavigate();

  const handleClick = (gotId: string) => {

    navigate("/Details", { state: { gotId } });
  };
  return (
    <Flex flexWrap="wrap" gap="25px" justify='space-evenly'>
      {pokemons.map((user: any, i: number) => {
        return (
          <Box
            key={pokemons[i].name}
            id={pokemons[i].name}
            onClick={() => handleClick(pokemons[i].name)}
          >
            <Box boxShadow="base">
              <Card name={pokemons[i].name} image={pokemons[i].image} />{" "}
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
};

export default CardList;
