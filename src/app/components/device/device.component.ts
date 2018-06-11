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

  }

  ngOnInit() {
  }

}
