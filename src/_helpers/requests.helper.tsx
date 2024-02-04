import axios from "axios";

const getPokemons = () => {
    return axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.data.results)
        .catch(err => (console.error(err)));
};

export interface SpritesData {
    back_default?: string,
    back_female?: string,
    back_shiny?: string,
    back_shiny_female?: string,
    front_default?: string,
    front_female?: string,
    front_shini?: string,
    front_shiny_female?: string
}
export interface AbilitiesData {
    name: string
}
export interface TypeData {
    slot: number,
    type: {
        name: string
    }
}
export interface PokemonDetailData {
    abilities: AbilitiesData[],
    base_experience: number,
    forms: object[],
    height: number,
    id: number,
    name: string,
    sprites: SpritesData,
    weight: number
    types: TypeData[]
};
const getDetailsPokemon = async (url: string) => {
    try {
        const { data: res } = await axios.get<PokemonDetailData>(url);
        return res;
    } catch (errAxios) {
        console.error({errAxios});
        axios.isAxiosError(errAxios) && console.error("Axios error.", {errAxios});
        return null;
    }
};

export { getPokemons, getDetailsPokemon };