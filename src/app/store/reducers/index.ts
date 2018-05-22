import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth';
import * as fromDevice from './device';
import * as fromProgress from './progress';
import * as fromGenre from './genre';

export interface State {
    auth: fromAuth.State;
    device: fromDevice.State;
    progress: fromProgress.State;
    genre: fromGenre.State;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
    device: fromDevice.reducer,
    progress: fromProgress.reducer,
    genre: fromGenre.reducer
};
