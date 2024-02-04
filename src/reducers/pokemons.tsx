import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons: [],
};

export const pokemonsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload };
        case SET_FAVORITE:
            const newPokemonList: any = [ ...state.pokemons ];
            const currentPokemonIndex = newPokemonList
                .findIndex((pokemon: any) => (pokemon.id === action.payload.pokemonId));
            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            return { ...state, pokemons: newPokemonList };
        default:
            return state;
    }
};