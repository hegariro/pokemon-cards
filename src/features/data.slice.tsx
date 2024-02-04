import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailsPokemon, getPokemons } from "../_helpers/requests.helper";

const initialState = {
    pokemons: [],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state: any, action: any) => {
            const currentPokemonIndex = state.pokemons
                .findIndex((pokemon: any) => (pokemon.id === action.payload.pokemonId));
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        },
    }
});

export const fetchDetailsPokemon = createAsyncThunk(
    'data/fetchDetailsPokemon',
    async(_, {dispatch}) => {
        const pokemonRes = await getPokemons();
        const pokemonsDetailsRes = await Promise.all(pokemonRes.map((pokemon: any) => getDetailsPokemon(pokemon.url)));
        dispatch(setPokemons(pokemonsDetailsRes));
    },
);

export const pokemonReducers = dataSlice.reducer;
export const { setPokemons, setFavorite } = dataSlice.actions;