import * as genre from "../actions/genre";
import { Genre } from "../../domain/genre";

export interface State {
    primaryGenres: Genre[];
    error: string;
    selectedPrimaryGenre: Genre;
    secondaryGenres: Genre[];
    selectedSecondaryGenre: Genre;
}

export const initialState: State = {
    primaryGenres: [],
    secondaryGenres: [],
    selectedPrimaryGenre: null,
    selectedSecondaryGenre: null,
    error: null
}

export function reducer(state = initialState, action: genre.Actions): State {
    switch (action.type) {
        case genre.SELECT_PRIMARY:
            return Object.assign({}, state, { selectedPrimaryGenre: action.payload });
        case genre.SELECT_SECONDARY:
            return Object.assign({}, state, { selectedSecondaryGenre: action.payload });
        case genre.PRIMARY_LOAD_SUCCESS:
            return Object.assign({}, state, { primaryGenres: action.payload, error: null });
        case genre.PRIMARY_LOAD_FAIL:
            return Object.assign({}, state, { primaryGenres: [], error: action.payload });
        case genre.SECONDARY_LOAD_SUCCESS:
            return Object.assign({}, state, { primaryGenres: action.payload, error: null });
        case genre.SECONDARY_LOAD_FAIL:
            return Object.assign({}, state, { primaryGenres: [], error: action.payload });
    }
    return state;
}