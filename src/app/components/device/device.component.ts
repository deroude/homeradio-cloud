import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../store/reducers';
import { Store } from '@ngrx/store';
import { SelectAction } from '../../store/actions/device';

@Component({
  selector: 'device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  deviceId$: Observable<string>;

  constructor(private route: ActivatedRoute,
    private router: Router, private store: Store<fromRoot.State>) {
    this.deviceId$ = this.store.select(state => state.device.selected);
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('deviceId')) {
        store.dispatch(new SelectAction(params.get('deviceId')))
      }
    });
  }


  ngOnInit() {
    this.deviceId$ = this.route.paramMap.map((params: ParamMap) => params.get('deviceId'));
  }

}
