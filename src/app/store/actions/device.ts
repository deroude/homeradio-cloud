import { Action } from '@ngrx/store';
import { Device } from '../../domain/device';

export const SELECT = "[Device] Select";
export const LOAD = "[Device] Load";
export const LOAD_SUCCESS = "[Device] Load successful";
export const LOAD_FAIL = "[Device] Load failed"
export const CLEAR = "[Device] Clear"

export class SelectAction implements Action {
    readonly type = SELECT;
    constructor(public payload: Device) { }
}

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
    constructor(public payload: Device[]) { }
}

export class LoadFailAction implements Action {
    readonly type = LOAD_FAIL;
    constructor(public payload: string) { }
}

export type Actions = SelectAction
    | LoadSuccessAction
    | LoadFailAction
    | ClearAction
    | LoadAction;