import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth';
import * as fromDevice from './device';
import * as fromProgress from './progress';

export interface State {
    auth: fromAuth.State;
    device: fromDevice.State;
    progress: fromProgress.State;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
    device: fromDevice.reducer,
    progress: fromProgress.reducer
};
