import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { Report } from '../report';

/**
 * ACTIONS.
 **/
export const setReports = createAction(
    '[Reports] Set Report',
    props<{data:Report[]}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Report[] = [];

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setReports, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Report[] | undefined, action: Action) {
  return featureReducer(state, action);
}