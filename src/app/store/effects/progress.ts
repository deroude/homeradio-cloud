import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";

import * as authActions from "../actions/auth";
import * as progressActions from "../actions/progress";
import * as deviceActions from "../actions/device";
import * as radioActions from "../actions/radio";
import * as genreActions from "../actions/genre";


type showProgressTypes = authActions.SigninAction
    | authActions.SignupAction
    | authActions.SignoutAction
    | deviceActions.LoadAction
    | radioActions.LoadAction;

type hideProgressType = authActions.SigninSuccessAction
    | authActions.SignupSuccessAction
    | authActions.SignoutSuccessAction
    | deviceActions.LoadSuccessAction
    | radioActions.LoadSuccessAction
    | authActions.SignupFailAction
    | authActions.SignoutFailAction
    | deviceActions.LoadFailAction
    | radioActions.LoadFailAction;

const showProgressActions = [
    authActions.SIGNIN,
    authActions.SIGNOUT,
    authActions.SIGNUP,
    deviceActions.LOAD,
    genreActions.LOAD_PRIMARY,
    genreActions.SELECT_PRIMARY,
    genreActions.SELECT_SECONDARY
]

const hideProgressActions = [
    authActions.SIGNIN_FAIL,
    authActions.SIGNIN_SUCCESS,
    authActions.SIGNOUT_FAIL,
    authActions.SIGNOUT_SUCCESS,
    authActions.SIGNUP_FAIL,
    authActions.SIGNUP_SUCCESS,
    deviceActions.LOAD_FAIL,
    deviceActions.LOAD_SUCCESS,
    radioActions.LOAD_FAIL,
    radioActions.LOAD_SUCCESS,
    genreActions.PRIMARY_LOAD_FAIL,
    genreActions.PRIMARY_LOAD_SUCCESS,
    genreActions.SECONDARY_LOAD_FAIL,
    genreActions.SECONDARY_LOAD_SUCCESS
]

@Injectable()
export class ProgressEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    showSpinner: Observable<Action> = this.actions$
        .ofType<showProgressTypes>(...showProgressActions)
        .map((action) => new progressActions.StartAction({ task: action.type }))

    @Effect()
    hideSpinner: Observable<Action> = this.actions$
        .ofType<hideProgressType>(...hideProgressActions)
        .map((action) => new progressActions.StopAction(action.type));
}