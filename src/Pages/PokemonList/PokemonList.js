import Card from "../../Components/Card/Card";
import { useContext, PokeContext } from "../../Context/PokeContext";
import Pagination from "@mui/material/Pagination";
import "./styles.css";

function PokemonList() {
  const { setPokeDex, page, setPage, totalPages } =
    useContext(PokeContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container">
      <div className="poke-list">
        <Card infoPokemon={(poke) => setPokeDex(poke)} />
      </div>
      <div className="pagination-container">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          size="large"
        />
      </div>
    </div>
  );
}

export default PokemonList;
