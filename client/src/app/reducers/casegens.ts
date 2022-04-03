import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { Casegen } from '../casegen';

/**
 * ACTIONS.
 **/
export const setCasegens = createAction(
    '[Casegens] Set Casegens',
    props<{data:Casegen[]}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Casegen[] = [];

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setCasegens, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Casegen[] | undefined, action: Action) {
  return featureReducer(state, action);
}