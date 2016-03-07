import { handleActions, Action } from 'redux-actions';

import { <%= modelClassName %> } from '../models/todos';
import {
  ADD_<%= modelConstName %>,
} from '../constants/ActionTypes';

const initialState = [<<%= modelClassName %>>{
  text: 'Use Redux with TypeScript',
  completed: false,
  id: 0
}];

// TODO: extract to utils
function nextId(state, entity) {
  return state.reduce((maxId, entity) => Math.max(entity.id, maxId), -1) + 1;
}

export default handleActions <<%= modelClassName %>[] > ({
  [ADD_ <%= modelConstName %>]: (state: <%= modelClassName %>[], action: Action): <%= modelClassName %>[] => {
    return [{
      id: nextId(state, todo),
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
  },
}, initialState);
