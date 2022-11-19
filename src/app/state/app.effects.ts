import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { debounceTime, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { AppService } from '../services/app.service';
import * as AppActions from './app.actions';

@Injectable({
  providedIn: 'root'
})
export class AppEffects {

  checkDataLoaded$ = createEffect(() =>
    this.actions.pipe(
      ofType(AppActions.checkDataLoaded),
      withLatestFrom(this.appService.count$),
      debounceTime(2000),
      switchMap(([_, count]) => {
        return this.appService
                    ._checkDataLoaded(count)
                    .pipe(
                      map(response => {
                        if (response.dataLoaded) {
                          return AppActions.dataLoadedSuccess({ dataLoaded: response.dataLoaded });
                        }
                        else {
                          // when API receives `count` of 3, it will return `dataLoaded: true`
                          this.appService.incrementCount();

                          return AppActions.checkDataLoaded();
                        }
                      }),
                    );
      }),
    ),
  );

  constructor(
    private readonly actions: Actions,
    private readonly appService: AppService,
  ) {}
}
