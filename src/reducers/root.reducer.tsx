import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemons";

const rootReducer = combineReducers({
    data: pokemonsReducer,
    // se agregan los demás reducer
});

export { rootReducer };