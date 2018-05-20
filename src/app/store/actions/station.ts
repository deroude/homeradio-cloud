import { Action } from '@ngrx/store';

export const SELECT = "[Station] Select";

export class SelectAction implements Action {
    readonly type = SELECT;
    constructor(public payload: string) { }
}

export type Actions = SelectAction;