import axios from "axios";

import React, {
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";

const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [pokeDex, setPokeDex] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const values = {
    pokeData,
    setPokeData,
    loading,
    setLoading,
    url,
    setUrl,
    pokeDex,
    setPokeDex,
    page,
    setPage,
    totalPages,
    setTotalPages,
  };

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(
      `${url}?offset=${(page - 1) * 20}&limit=20`
    );
    setTotalPages(Math.ceil(res.data.count / 20));
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    setPokeData(pokemonData.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    pokeFun();
  }, [url, page]);

  return (
    <PokeContext.Provider value={values}>
      {children}
    </PokeContext.Provider>
  );
};

export { PokeContext, useContext };
