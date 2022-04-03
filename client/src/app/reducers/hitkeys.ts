import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { Hitkey } from '../hitkey';

/**
 * ACTIONS.
 **/
export const setHitkeys = createAction(
    '[Hitkeys] Set Hitkeys',
    props<{data:Hitkey[]}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Hitkey[] = [];

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setHitkeys, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Hitkey[] | undefined, action: Action) {
  return featureReducer(state, action);
}