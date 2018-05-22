import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import * as fromRoot from '../../store/reducers';
import { Store } from '@ngrx/store';
import { SelectAction } from '../../store/actions/device';

@Component({
  selector: 'device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private store: Store<fromRoot.State>) {
    this.route.paramMap.mergeMap((params: ParamMap) => this.store.select(state => state.device)
      .filter(ds => ds.devices.length > 0)
      .map(ds => ds.devices.find(d => d.id === params.get('deviceId'))))
      .subscribe(d => store.dispatch(new SelectAction(d)));
  }


  ngOnInit() {
  }

}
