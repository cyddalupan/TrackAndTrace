import { createAction, props } from '@ngrx/store';
import { createReducer, on, Action } from '@ngrx/store';

import { Uniquechat } from '../uniquechat';

/**
 * ACTIONS.
 **/
export const setUniquechat = createAction(
    '[Uniquechat] Set Uniquechat',
    props<{data:Uniquechat}>()
);

/**
 * INITIAL VALUE.
 **/
export const InitialState:Uniquechat = {
  id: 0,
  message: "",
  fb_id: 0,
  is_closed: false,
};

/**
 * REDUCER.
 **/
export const featureReducer = createReducer(InitialState,
  on(setUniquechat, (state, {data}) => state = data),
);

/**
 * EXPORT REDUCER.
 **/
export function reducer(state: Uniquechat | undefined, action: Action) {
  return featureReducer(state, action);
}