import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonsList from '../components/PokemonsList';
import PokemonDetails from './PokemonDetails';

const HomePage = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  if (!allPokemons) return <div>loading...</div>;
  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          <Router>
            <Routes>
              <Route
                element={<PokemonDetails allPokemons={allPokemons} />}
                path="/PokemonEvolution/:name"></Route>

              <Route
                element={
                  <PokemonsList
                    allPokemons={allPokemons}
                    getAllPokemons={getAllPokemons}
                  />
                }
                path="/PokemonEvolution"></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
