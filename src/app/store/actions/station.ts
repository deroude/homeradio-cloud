import { Action } from '@ngrx/store';
import { Station } from '../../domain/station';

export const SELECT = "[Station] Select";
export const LOAD = "[Station] Load";
export const LOAD_SUCCESSFUL = "[Station] Load Successful";
export const LOAD_FAILED = "[Station] Load Failed";
export const PLAY = "[Station] Play"

export class SelectAction implements Action {
    readonly type = SELECT;
    constructor(public payload: Station) { }
}
export class LoadAction implements Action {
    readonly type = LOAD;
    constructor(public payload: string) { }
}
export class LoadSuccessfulAction implements Action {
    readonly type = LOAD_SUCCESSFUL;
    constructor(public payload: Station[]) { }
}
export class LoadFailedAction implements Action {
    readonly type = LOAD_FAILED;
    constructor(public payload: any) { }
}
export class PlayAction implements Action {
    readonly type = PLAY;
    constructor(public payload: boolean) { }
}

export type Actions = SelectAction
    | LoadAction
    | LoadSuccessfulAction
    | LoadFailedAction
    | PlayAction;