import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { DataPokemon } from './PokemonList';
import { StarButton } from './StarButton';
import { setFavorite } from '../features/data.slice';
import './PokemonList.css';

interface PokemonCardProps {
    pokemon: DataPokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const dispatch = useDispatch();
    const handleOnFavorite = (pokemonId: number) => {
      dispatch(setFavorite<any>({ pokemonId }));
    };

    try {
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