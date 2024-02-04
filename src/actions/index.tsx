import { getDetailsPokemon } from "../_helpers/requests.helper";
import { SET_FAVORITE, SET_POKEMONS } from "./types";

export const setPokemons = (payload: object) => ({
    type: SET_POKEMONS,
    payload
});

export const getPokemonsDetails = (pokemons: any[] = []) => async (dispatch: any) => {
    const pokemonsDetailsRes = await Promise.all(pokemons.map((pokemon: any) => getDetailsPokemon(pokemon.url)));
    dispatch(setPokemons(pokemonsDetailsRes));
};

export const setFavorite = (payload: any) => ({
    type: SET_FAVORITE,
    payload,
});