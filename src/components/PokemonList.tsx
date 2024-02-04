import { AbilitiesData, SpritesData, TypeData } from '../_helpers/requests.helper';
import { PokemonCard } from './PokemonCard';

interface PokemonListProps {
    pokemons: DataPokemon[]
}
export interface DataPokemon {
    id: number,
    name: string,
    url: string,
    favorite: boolean,
    sprites: SpritesData,
    abilities: AbilitiesData[]
    types: TypeData[]
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon, idx) => {
        return <PokemonCard key={idx} pokemon={pokemon} />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export { PokemonList };