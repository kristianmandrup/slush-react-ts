import { handleActions, Action } from 'redux-actions';

import { Todo } from '../models/todos';
import {
  ADD_TODO,
} from '../constants/ActionTypes';

const initialState = [<Todo>{
  text: 'Use Redux with TypeScript',
  completed: false,
  id: 0
}];

export default handleActions<Todo[]>({
  [ADD_TODO]: (state: Todo[], action: Action): Todo[] => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
  },
}, initialState);
