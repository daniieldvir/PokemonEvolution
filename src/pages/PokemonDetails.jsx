import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonDetails = ({ allPokemons }) => {
  let navigate = useNavigate();
  let { name } = useParams();

  const pokemon = allPokemons.find((pokemon) => {
    return pokemon.name.toString() === name;
  });
  console.log(pokemon);

  const style = `list-container ${pokemon.types[0].type.name}`;
  console.log(style);

  if (!pokemon) return <div>loading detail</div>;
  return (
    <section className={`pokemon-detail ${style}`}>
      <h1>{pokemon.name}</h1>

      <section className="pokemon-detail-size">
        <div className="pokemon-size">
          <p>
            {pokemon.height}
            <small>Pokemon Height</small>
          </p>
        </div>
        <div className="pokemon-size">
          <p>
            {pokemon.weight}
            <small>Pokemon Weight</small>
          </p>
        </div>
      </section>

      <div className="pokemon-image">
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.back_default} />
        <img src={pokemon.sprites.front_shiny} />
        <img src={pokemon.sprites.back_shiny} />
      </div>

      <p>Pokemon Abilities</p>
      <section className="pokemon-data">
        {pokemon.abilities.map((ability) => {
          return <p key={ability}>{ability.ability.name}</p>;
        })}
      </section>

      <p>Pokemon Moves</p>
      <section className="pokemon-data">
        {pokemon.moves.map((move) => {
          return <p key={move}>{move.move.name}</p>;
        })}
      </section>

      <button
        onClick={() => {
          navigate('/PokemonEvolution');
        }}>
        Back To Pokemon's
      </button>
    </section>
  );
};

export default PokemonDetails;
