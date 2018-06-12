import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth';
import * as fromDevice from './device';
import * as fromProgress from './progress';
import * as fromGenre from './genre';
import * as fromStation from './station';

export interface State {
    auth: fromAuth.State;
    device: fromDevice.State;
    progress: fromProgress.State;
    genre: fromGenre.State;
    station: fromStation.State;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
    device: fromDevice.reducer,
    progress: fromProgress.reducer,
    genre: fromGenre.reducer,
    station: fromStation.reducer
};
