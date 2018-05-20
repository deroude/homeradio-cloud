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

import { State } from '../reducers';
import { FirestoreService } from '../../services/firestore.service';
import { Device } from '../../domain/device';

@Injectable()
export class TenantEffects {

    private auth$: Observable<firebase.User> = this.store$.select(state => state.auth.user);

    constructor(private actions$: Actions, private store$: Store<State>, private db: FirestoreService) { }

    @Effect()
    selectGenre$: Observable<Action> = this.actions$
        .ofType(genre.SELECT)
        .map(() => new radio.LoadAction());
}
