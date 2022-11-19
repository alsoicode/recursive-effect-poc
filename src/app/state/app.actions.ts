import { createAction, props } from '@ngrx/store';

export const checkDataLoaded = createAction(
  '[App] Check Data Loaded',
);

export const dataLoadedSuccess = createAction(
  '[App] Data Loaded Success',
  props<{ dataLoaded: boolean }>(),
);

export const incrementCount = createAction(
  '[App] Increment Count',
);
