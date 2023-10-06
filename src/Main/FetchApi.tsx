import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { Box, Text } from "@chakra-ui/react";

function FetchApi() {
  const [allPokemons, setAllPokemons] = useState([]);

  const FetchMainApi = async () => {
    const first = await fetch("https://pokeapi.co/api/v2/pokemon");
    const firstJson = await first.json();

    const detailsData = firstJson.results.map(async (i: any) => {
      const fetchData = await fetch(i.url);
      return fetchData.json();
    });
    const response = await Promise.all(detailsData);

    const loadData: any = (await Promise.all(detailsData)).map((data) => ({
      key: data.name,
      name: data.name,
      image: data.sprites["front_default"],
    }));
    setAllPokemons(loadData);
  };

  useEffect(() => {
    FetchMainApi();
  }, []);

  return (
    <Box padding={4}>
      <Text align='center' fontSize='2xl' fontWeight='bold' margin={10}>Choose your Pokemon!</Text>
      <CardList pokemons={allPokemons} />
    </Box>
  );
}

export default FetchApi;
