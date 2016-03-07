import { handleActions, Action } from 'redux-actions';

import { <%= modelClassName %> } from '../models/todos';
import {
  Actions
} from '../constants/<%= modelPluralName %>';

const initialState = [<<%= modelClassName %>>{
  text: '<%= modelClassName %>',
  completed: false,
  id: 0
}];

// TODO: extract to utils
function nextId(state, entity) {
  return state.reduce((maxId, entity) => Math.max(entity.id, maxId), -1) + 1;
}

export default handleActions <<%= modelClassName %>[] > ({
  [Actions.Add]: (state: <%= modelClassName %>[], action: Action): <%= modelClassName %>[] => {
    return [{
      id: nextId(state, todo),
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
  },
}, initialState);
