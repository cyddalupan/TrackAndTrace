import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { Category } from '../category';

/**
 * ACTIONS.
 **/
export const setCategories = createAction(
    '[Categories] Set Categories',
    props<{data:Category[]}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Category[] = [];

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setCategories, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Category[] | undefined, action: Action) {
  return featureReducer(state, action);
}