import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { Searcher } from '../components/Searcher';
import { PokemonList } from '../components/PokemonList';
import { fetchDetailsPokemon } from '../features/data.slice';
import './App.css'

function App() {
  const pokemons = useSelector((state:any) => (state.data.pokemons)) || [];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch<any>(fetchDetailsPokemon());
  }, []);

  return (
    <>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default App;
