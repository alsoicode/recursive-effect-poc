import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

import { IAppState } from '../interfaces';

export const initialState: IAppState = {
  count: 1,
  dataLoaded: false,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.dataLoadedSuccess, (state, { dataLoaded }): IAppState => ({
    ...state,
    dataLoaded,
  })),
  on(AppActions.incrementCount, (state): IAppState => ({
    ...state,
    count: state.count + 1,
  })),
);
