import { createAction, Action } from 'redux-actions';

import { <%= modelClassName %> } from '../models/<%= modelPluralName %>';
import * as types from '../constants/ActionTypes';

const add<%= modelClassName %> = createAction <<%= modelClassName %>>(
  types.ADD_ <%= modelConstName %>,
  (text: string) => ({ text, completed: false })
);

export {
  add<%= modelClassName %>
}
