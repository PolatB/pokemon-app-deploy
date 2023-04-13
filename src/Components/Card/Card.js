import React from "react";
import "./styles.css";
import { useContext, PokeContext } from "../../Context/PokeContext";
import { useNavigate } from "react-router-dom";

function Card() {
  let navigate = useNavigate();
  const { pokeData, loading, setPokeDex } = useContext(PokeContext);

  const infoPokemon = (poke) => {
    if (setPokeDex) {
      setPokeDex(poke);
    }
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokeData.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                navigate("/details");
              }}
            >
              <div className="card" onClick={() => infoPokemon(item)}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default Card;
