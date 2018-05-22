import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import { Genre } from '../domain/genre';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { Station } from '../domain/station';

@Injectable()
export class DeviceService {

  constructor(private _http: HttpClient) { }
  public getPrimaryGenres(api:string): Observable<Genre[]> {
    return this._http.get(api+"/shoutcast/genre/primary")
      .map((re: any) => re.genrelist.genre.filter(g => g.count > 0).map(g => <Genre>{ id: g.id, name: g.name, hasChildren: g.haschildren }))
      .catch((err: any) => { console.log(err); return Observable.of([]) });
  }

  public getSecondaryGenres(api:string,id: number) {
    return this._http.get(api+ "/shoutcast/genre/secondary/" + id)
      .map((re: any) => re.genrelist.genre.filter(g => g.count > 0).map(g => <Genre>{ id: g.id, name: g.name }))
      .catch((err: any) => { console.log(err); return Observable.of([]) });
  }

  public getStations(api:string,genre: number): Observable<Station[]> {
    return this._http.get(api+"/shoutcast/stations/" + genre)
      .map((re: any) =>
        re.stationlist.station.map(s => <Station>{ id: s.id, name: s.name, bitRate: s.br, currentTrack: s.ct }))
      .catch((err: any) => { console.log(err); return Observable.of([]) });
  }

  public getStationStreams(api:string,stationId: number): Observable<string[]> {
    return this._http.get<string[]>(api+"/shoutcast/station/" + stationId)
      .catch((err: any) => { console.log(err); return Observable.of([]) });
  }

}
