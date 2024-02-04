import Meta from 'antd/lib/card/Meta';
import { Card } from 'antd';
import { DataPokemon } from './PokemonList';
import { StarButton } from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import './PokemonList.css';

interface PokemonCardProps {
    pokemon: DataPokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const dispatch = useDispatch();
    const {
      id,
      abilities,
      name,
      favorite,
      sprites: { front_default },
      types
    } = pokemon;
    const abilitiesText = abilities
      .map((item: any) => (item?.ability?.name || ''))
      .join(', ');
    const tyesText = types
      .map((item:any) => (item?.type?.name || ''))
      .join(', ');
    const handleOnFavorite = (pokemonId: any) => {
      console.debug({ pokemonId });
      dispatch(setFavorite({ pokemonId }));
    };

    try {
        return (
          <Card
            title={name}
            cover={<img src={front_default} alt={name} />}
            extra={<StarButton isFavorite={favorite} onClick={() => handleOnFavorite(id)} />}
          >
            <Meta 
              title={'Abilities'} 
              description={abilitiesText}
              />
            <Meta
              title={'Types'}
              description={tyesText}
              style={{ marginTop: '12px' }}
            />
          </Card>
        );
    } catch(err) {
        console.error(err);
    }
};

export { PokemonCard };