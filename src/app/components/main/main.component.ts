import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as fromProgress from '../../store/reducers/progress';
import { Device } from '../../domain/Device';
import { SelectAction } from '../../store/actions/device';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @HostBinding("class") classes = "mat-app-background basic-container";

  progress$: Observable<boolean>;
  devices$: Observable<Device[]>;

  constructor(private router: Router, private store: Store<fromRoot.State>) {

  }

  ngOnInit(): void {
    this.progress$ = this.store.select(state => state.progress.show)
    this.devices$ = this.store.select(state => state.device.devices)
    this.store.select(state => state.auth.user).subscribe(u => {
      if (u === null) this.router.navigate(["home"]);
    });
  }

  selectDevice(id: string) {
    this.store.dispatch(new SelectAction(id));
  }
}
