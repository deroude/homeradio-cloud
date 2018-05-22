import { Action } from '@ngrx/store';
import { Genre } from '../../domain/genre';

export const SELECT_PRIMARY = "[Genre] Select Primary Genre";
export const SELECT_SECONDARY = "[Genre] Select Secondary Genre";
export const PRIMARY_LOAD_SUCCESS = "[Genre] Primary Load Success";
export const PRIMARY_LOAD_FAIL = "[Genre] Primary Load Fail";
export const SECONDARY_LOAD_SUCCESS = "[Genre] Secondary Load Success";
export const SECONDARY_LOAD_FAIL = "[Genre] Secondary Load Fail";

export class SelectPrimaryAction implements Action {
    readonly type = SELECT_PRIMARY;
    constructor(public payload: Genre) { }
}

export class SelectSecondaryAction implements Action {
    readonly type = SELECT_SECONDARY;
    constructor(public payload: Genre) { }
}

export class PrimaryLoadSuccessAction implements Action {
    readonly type = PRIMARY_LOAD_SUCCESS;
    constructor(public payload: Genre[]) { }
}
export class PrimaryLoadFailAction implements Action {
    readonly type = PRIMARY_LOAD_FAIL;
    constructor(public payload: string) { }
}

export class SecondaryLoadSuccessAction implements Action {
    readonly type = SECONDARY_LOAD_SUCCESS;
    constructor(public payload: Genre[]) { }
}
export class SecondaryLoadFailAction implements Action {
    readonly type = SECONDARY_LOAD_FAIL;
    constructor(public payload: string) { }
}

export type Actions = SelectPrimaryAction
    | SelectSecondaryAction
    | PrimaryLoadSuccessAction
    | PrimaryLoadFailAction
    | SecondaryLoadSuccessAction
    | SecondaryLoadFailAction;