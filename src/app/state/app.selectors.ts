import { createSelector, createFeatureSelector } from '@ngrx/store';

import { APP_STORE_TOKEN } from './app.store-token';
import { IAppState } from '../interfaces';

export const appSelector = createFeatureSelector<IAppState>(APP_STORE_TOKEN);

export const count = createSelector(
  appSelector,
  (state): number | undefined => state.count,
);

export const dataLoaded = createSelector(
  appSelector,
  (state): boolean | undefined => state.dataLoaded,
);
