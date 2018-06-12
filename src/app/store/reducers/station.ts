import * as station from "../actions/station";
import { Station } from "../../domain/station";

export interface State {
    stations: Station[];
    error: string;
    selected: Station;
    playing: boolean;
}

export const initialState: State = {
    stations: [],
    error: null,
    selected: null,
    playing: false
}

export function reducer(state = initialState, action: station.Actions): State {
    switch (action.type) {
        case station.SELECT:
            return Object.assign({}, state, { selected: action.payload });
        case station.LOAD_SUCCESSFUL:
            return Object.assign({}, state, { stations: action.payload, error: null });
        case station.LOAD_FAILED:
            return Object.assign({}, state, { stations: [], error: action.payload });
        case station.PLAY:
            return Object.assign({}, state, { playing: action.payload });
    }
    return state;
}