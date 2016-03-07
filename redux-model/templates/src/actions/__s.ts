import { createAction, Action } from 'redux-actions';

import { <%= modelClassName %> } from '../models/<%= modelPluralName %>';
import Actions from '../constants/<%= modelPluralName %>';

const add<%= modelClassName %> = createAction <<%= modelClassName %>>(
  Actions.Add,
  (text: string) => ({ text, completed: false })
);

export {
  add<%= modelClassName %>
}
