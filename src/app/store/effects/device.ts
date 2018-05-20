import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/takeUntil';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';

import * as firebase from 'firebase/app';

import * as device from "../actions/device";
import * as auth from "../actions/auth";
import * as radio from "../actions/radio";

import { State } from '../reducers';
import { FirestoreService } from '../../services/firestore.service';
import { Device } from '../../domain/device';

@Injectable()
export class DeviceEffects {

    private auth$: Observable<firebase.User> = this.store$.select(state => state.auth.user);

    constructor(private actions$: Actions, private store$: Store<State>, private db: FirestoreService) { }

    @Effect()
    loadDevices$: Observable<Action> = this.actions$
        .ofType(device.LOAD)
        .withLatestFrom(this.auth$)
        .filter(([a, u]) => u !== null)
        .switchMap(([a, u]) => this.db.getCollection<Device>("/devices")
            .takeUntil(this.auth$.filter(u => u === null))
        )
        .map(tlist => new device.LoadSuccessAction(tlist))
        .catch(err => of(new device.LoadFailAction(err)));

    @Effect()
    unloadDevices$: Observable<Action> = this.actions$
        .ofType(auth.SIGNOUT)
        .map(() => new device.ClearAction());

    @Effect()
    selectDevice$: Observable<Action> = this.actions$
        .ofType(device.SELECT)
        .map(() => new radio.LoadAction());

    @Effect()
    afterLogin$: Observable<Action> = this.actions$
        .ofType(auth.SIGNIN_SUCCESS)
        .map(() => new device.LoadAction());
}
