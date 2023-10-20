import React, { useState, useEffect } from "react";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import PokemonDetailList from "./PokemonDetailList";

const FetchDetailApi = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pokeImg, setPokeImg] = useState([]);
  const [pokeAbility, setPokeAbility] = useState([]);
  const [pokeType, setPokeType] = useState([]);
  const [pokeMove, setPokeMove] = useState([]);

  const GetImg = async () => {
    const third = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${location.state.gotId}`
    );
    const data = await third.json();

    setPokeImg(data.sprites["front_default"]);
  };
  const GetAbility = async () => {
    const second = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${location.state.gotId}`
    );
    const secondJson = await second.json();

    const detailsPokeData = secondJson.abilities.map(async (i: any) => {
      const fetchPokeData = await Promise.all(i.ability.name);
      return fetchPokeData.join("");
    });

    const res = await Promise.all(detailsPokeData);

    const loadPokeData: any = (await Promise.all(detailsPokeData)).map(
      (data, i) => ({
        key: data.i,
        id: location.state.gotId,
        ability: res[i],
      })
    );

    setPokeAbility(loadPokeData);
  };

  const GetTypes = async () => {
    const forth = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${location.state.gotId}`
    );
    const forthJson = await forth.json();

    const detailsPokeType = forthJson.types.map(async (i: any) => {
      const fetchPokeType = await Promise.all(i.type.name);
      return fetchPokeType.join("");
    });

    const res = await Promise.all(detailsPokeType);

    const loadPokeType: any = (await Promise.all(detailsPokeType)).map(
      (data, i) => ({
        key: data.i,
        id: location.state.gotId,
        type: res[i],
      })
    );

    setPokeType(loadPokeType);
  };

  const GetMoves = async () => {
    const fifth = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${location.state.gotId}`
    );
    const fifthJson = await fifth.json();

    const detailsPokeMove = fifthJson.moves.map(async (i: any) => {
      const fetchPokeMove = await Promise.all(i.move.name);
      return fetchPokeMove.join("");
    });

    const res = await Promise.all(detailsPokeMove);

    const loadPokeMove: any = (await Promise.all(detailsPokeMove)).map(
      (data, i) => ({
        key: data.i,
        id: location.state.gotId,
        move: res[i],
      })
    );

    setPokeMove(loadPokeMove);
  };

  useEffect(() => {
    GetImg();
    GetAbility();
    GetTypes();
    GetMoves();
  }, []);

  return (
    <Box>
      <Flex direction="column" justifyContent="space-evenly" align="center">
        <Text as="b" fontSize="3xl">
          I'm {location.state.gotId}!
        </Text>
        <PokemonDetailList
          pokeAbi={pokeAbility}
          myImage={pokeImg}
          pokeType={pokeType}
          pokeMove={pokeMove}
        />
        <Box marginY={5}>
        <Button onClick={() => navigate(-1)} colorScheme="teal">
          Back
        </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default FetchDetailApi;
