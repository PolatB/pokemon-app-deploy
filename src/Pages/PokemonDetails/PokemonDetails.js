import React from "react";
import { useContext, PokeContext } from "../../Context/PokeContext";
import Pokeindex from "../../Components/Pokeindex/Pokeindex";
import "./styles.css";

function PokemonDetails() {
  const { pokeDex } = useContext(PokeContext);

  return (
    <div className="main-details">
      <div>
        {pokeDex ? (
          <Pokeindex data={pokeDex} />
        ) : (
          <p>No Pokemon data found</p>
        )}
      </div>
    </div>
  );
}

export default PokemonDetails;
