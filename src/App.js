import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import PokemonList from "./Pages/PokemonList/PokemonList";
import PokemonDetails from "./Pages/PokemonDetails/PokemonDetails";

function App() {
  return (
    <>
      <Router>
        <nav className="routes">
          <Link to="/">List</Link>
          <Link to="/details">Details</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/details" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
