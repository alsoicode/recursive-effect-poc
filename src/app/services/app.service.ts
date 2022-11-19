import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState, IDataLoadedResponse } from '../interfaces';
import * as AppActions from '../state/app.actions';
import * as appSelectors from '../state/app.selectors';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  count$: Observable<number>;
  dataLoaded$: Observable<boolean>;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<IAppState>,
  ) {
    this.count$ = this.store.select(appSelectors.count);
    this.dataLoaded$ = this.store.select(appSelectors.dataLoaded);
  }

  checkDataLoaded(): void {
    this.store.dispatch(AppActions.checkDataLoaded());
  }

  _checkDataLoaded(count: number): Observable<IDataLoadedResponse> {
    return this.httpClient.get<IDataLoadedResponse>(`http://localhost:3000/results/data-loaded?count=${ count }`);
  }

  incrementCount(): void {
    this.store.dispatch(AppActions.incrementCount());
  }

}
