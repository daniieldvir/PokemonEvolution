import React from 'react';
import { Link } from 'react-router-dom';

const PokemonPreview = ({ pokemon }) => {
  const style = `list-container ${pokemon.types[0].type.name}`;

  if (!style) return <div>loading Preview</div>;

  return (
    <div className={style}>
      <div className="number">
        <small>#0{pokemon.id}</small>
      </div>

      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <div>
        <h3>{pokemon.name}</h3>
        <small>Type: {pokemon.types[0].type.name}</small>
      </div>

      <Link className="preview-link" pokemon={pokemon} to={`/:${pokemon.name}`}>
        More Details
      </Link>
    </div>
  );
};

export default PokemonPreview;
