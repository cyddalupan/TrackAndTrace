import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { Person } from '../person';

/**
 * ACTIONS.
 **/
export const setUsers = createAction(
    '[Users] Set Users',
    props<{data:Person[]}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Person[] = [];

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setUsers, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Person[] | undefined, action: Action) {
  return featureReducer(state, action);
}