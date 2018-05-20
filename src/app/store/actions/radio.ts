import { Action } from '@ngrx/store';
import { Radio } from '../../domain/radio';

export const LOAD = "[Radio] Load";
export const LOAD_SUCCESS = "[Radio] Load successful";
export const LOAD_FAIL = "[Radio] Load failed"
export const CLEAR = "[Radio] Clear"

export class LoadAction implements Action {
    readonly type = LOAD;
    constructor() { }
}

export class ClearAction implements Action {
    readonly type = CLEAR;
    constructor() { }
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: Radio) { }
}

export class LoadFailAction implements Action {
    readonly type = LOAD_FAIL;
    constructor(public payload: string) { }
}

export type Actions = LoadSuccessAction
    | LoadFailAction
    | ClearAction
    | LoadAction;