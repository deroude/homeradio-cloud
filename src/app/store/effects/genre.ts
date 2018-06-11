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

import * as genre from "../actions/genre";
import * as radio from "../actions/radio";
import * as device from "../actions/device";

import { State } from '../reducers';
import { FirestoreService } from '../../services/firestore.service';
import { Device } from '../../domain/device';
import { DeviceService } from '../../services/device.service';

@Injectable()
export class GenreEffects {

    private auth$: Observable<firebase.User> = this.store$.select(state => state.auth.user);

    constructor(private actions$: Actions, private store$: Store<State>, private db: FirestoreService, private local: DeviceService) { }

    @Effect()
    selectPrimaryGenre$: Observable<Action> = this.actions$
        .ofType(genre.SELECT_PRIMARY)
        .map(() => new radio.LoadAction());

    @Effect()
    loadPrimaryGenres$: Observable<Action> = this.actions$
        .ofType(genre.LOAD_PRIMARY)
        .withLatestFrom(this.store$.select(state => state.device))
        .filter(([d,s]) => s.selected !== null)
        .mergeMap(([d, s]) =>
            this.local.getPrimaryGenres(s.selected.localAddress)
                .map(gs => new genre.PrimaryLoadSuccessAction(gs))
        );
}
