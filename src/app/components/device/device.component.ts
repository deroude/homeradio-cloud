import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import * as fromRoot from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Genre } from '../../domain/genre';
import { Station } from '../../domain/station';

@Component({
  selector: 'device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  selectedPrimaryGenre$: Observable<Genre>;
  selectedSecondaryGenre$: Observable<Genre>;
  selectedStation$: Observable<Station>;
  playing$:Observable<boolean>;

  constructor(private route: ActivatedRoute,
    private router: Router, private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
    this.selectedPrimaryGenre$ = this.store.select(state => state.genre.selectedPrimaryGenre);
    this.selectedSecondaryGenre$ = this.store.select(state => state.genre.selectedSecondaryGenre);
    this.selectedStation$ = this.store.select(state => state.station.selected);
    this.playing$ = this.store.select(state => state.station.playing);
  }

}
