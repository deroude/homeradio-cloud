import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../store/reducers';
import * as stationActions from '../../store/actions/station';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Station } from '../../domain/station';

@Component({
  selector: 'station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  stations$: Observable<Station[]>;
  selected: Station;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.stations$ = this.store.select(state => state.station.stations);
    this.store.select(state => state.station.selected).subscribe(s => this.selected = s);
  }

  selectStation(s: Station): void {
    this.store.dispatch(new stationActions.SelectAction(s));
  }

  getColor(gid: string): string {
    if (this.selected && this.selected.id === gid) {
      return 'basic';
    }
  };

}
