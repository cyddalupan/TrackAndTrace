import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { Casegen } from '../casegen';
import { Category, CategoryKeyword } from '../category';
import { Report } from '../report';
import { Hitkey } from '../hitkey';
import { Uniquechat } from '../uniquechat';
import { Person } from '../person';
import { Fbuser } from '../fbuser';

import {reducer as casegensReducer} from './casegens';
import {reducer as categoriesReducer} from './categories';
import {reducer as categoryKeywordReducer} from './category_keyword';
import {reducer as reportsReducer} from './reports';
import {reducer as hitkeysReducer} from './hitkeys';
import {reducer as uniquechatReducer} from './uniquechat';
import {reducer as usersReducer} from './users';
import {reducer as fbusersReducer} from './fbusers';

export interface State {
  casegens: Casegen[];
  categories: Category[];
  categoryKeywords: CategoryKeyword[];
  reports: Report[];
  hitkeys: Hitkey[];
  uniquechat: Uniquechat;
  users: Person[];
  fbusers: Fbuser[];
}

export const reducers: ActionReducerMap<State> = {
  casegens: casegensReducer,
  categories: categoriesReducer,
  categoryKeywords: categoryKeywordReducer,
  reports: reportsReducer,
  hitkeys: hitkeysReducer,
  uniquechat: uniquechatReducer,
  users: usersReducer,
  fbusers: fbusersReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
