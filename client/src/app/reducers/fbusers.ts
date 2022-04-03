import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { Fbuser } from '../fbuser';

/**
 * ACTIONS.
 **/
export const setFbusers = createAction(
    '[Fbusers] Set Fbusers',
    props<{data:Fbuser[]}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Fbuser[] = [];

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setFbusers, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Fbuser[] | undefined, action: Action) {
  return featureReducer(state, action);
}