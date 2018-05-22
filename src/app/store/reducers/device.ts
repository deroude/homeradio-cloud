import * as device from "../actions/device";
import { Device } from "../../domain/device";

export interface State {
    devices: Device[];
    error: string;
    selected: Device;
}

export const initialState: State = {
    devices: [],
    error: null,
    selected: null
}

export function reducer(state = initialState, action: device.Actions): State {
    switch (action.type) {
        case device.LOAD_SUCCESS:
            return Object.assign({}, state, { devices: action.payload, error: null });
        case device.LOAD_FAIL:
            return Object.assign({}, state, { devices: null, error: action.payload });
        case device.SELECT:
            return Object.assign({}, state, { selected: action.payload });
        case device.CLEAR:
            return initialState;
    }
    return state;
}