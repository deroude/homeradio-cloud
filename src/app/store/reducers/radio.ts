import * as radio from "../actions/radio";
import { Radio } from "../../domain/radio";

export interface State {
    radio: Radio;
    error: string;
}

export const initialState: State = {
    radio: null,
    error: null
}

export function reducer(state = initialState, action: radio.Actions): State {
    switch (action.type) {
        case radio.LOAD_SUCCESS:
            return Object.assign({}, state, { radio: action.payload, error: null });
        case radio.LOAD_FAIL:
            return Object.assign({}, state, { tenants: null, error: action.payload });
        case radio.CLEAR:
            return initialState;
    }
    return state;
}