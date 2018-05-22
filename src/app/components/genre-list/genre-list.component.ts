import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import { Genre } from '../../domain/genre';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  @Input() primary: boolean = true;

  genres$: Observable<Genre[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.genres$ = this.store.select(state => state.genre)
      .map(gs => this.primary ? gs.primaryGenres : gs.secondaryGenres);
  }

  ngOnInit() {
  }

}
