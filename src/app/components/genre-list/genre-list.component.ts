import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as genreActions from '../../store/actions/genre';
import { Genre } from '../../domain/genre';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  @Input("primary") primary: boolean;

  genres$: Observable<Genre[]>;
  selected: Genre;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    if (this.primary === true) {
      this.genres$ = this.store.select(state => state.genre.primaryGenres);
      this.store.select(state => state.genre.selectedPrimaryGenre).subscribe(s => this.selected = s);
    } else {
      this.genres$ = this.store.select(state => state.genre.secondaryGenres);
      this.store.select(state => state.genre.selectedSecondaryGenre).subscribe(s => this.selected = s);
    }
  }

  selectGenre(g: Genre): void {
    this.store.dispatch(this.primary === true ?
      new genreActions.SelectPrimaryAction(g) :
      new genreActions.SelectSecondaryAction(g)
    );
  }

  getColor(gid: string): string {
    if (this.selected && this.selected.id === gid) {
      return 'basic';
    } else {
      return this.primary ? 'primary' : 'accent';
    }
  };
}