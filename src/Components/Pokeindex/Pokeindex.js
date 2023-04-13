import React from "react";
import "./styles.css";

function Pokeindex({ data }) {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1 className="detail-name">{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {data.abilities.map((poke, index) => {
              return (
                <>
                  <div key={index} className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke, index) => {
              return (
                <>
                  <h3 key={index}>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Pokeindex;
