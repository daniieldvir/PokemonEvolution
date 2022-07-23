import PokemonPreview from './PokemonPreview';

const PokemonsList = ({ allPokemons, getAllPokemons }) => {
  return (
    <>
      <h1>Pokemon Evolution</h1>
      <div className="list-wrapper">
        {allPokemons.map((pokemon, index) => (
          <PokemonPreview pokemon={pokemon} key={index} />
        ))}
      </div>
      <button className="load-more" onClick={() => getAllPokemons()}>
        Load More Pokemon's
      </button>
    </>
  );
};

export default PokemonsList;
