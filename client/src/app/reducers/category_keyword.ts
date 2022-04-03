import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { CategoryKeyword as Model } from '../category';

/**
 * ACTIONS.
 **/
export const setData = createAction(
    '[Category Keywords] Set Category Keywords',
    props<{data:Model[]}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Model[] = [];

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setData, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Model[] | undefined, action: Action) {
  return featureReducer(state, action);
}