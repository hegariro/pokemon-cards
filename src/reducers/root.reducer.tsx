import { combineReducers } from "redux";
import { pokemonReducers } from "../features/data.slice";

const rootReducer = combineReducers({
    data: pokemonReducers,
    // se agregan los demás reducer
});

export { rootReducer };