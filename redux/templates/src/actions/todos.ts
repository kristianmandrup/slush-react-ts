import { createAction, Action } from 'redux-actions';

import { Todo } from '../models/todos';
import * as types from '../constants/ActionTypes';

const addTodo = createAction<Todo>(
  types.ADD_TODO,
  (text: string) => ({ text, completed: false })
);

export {
  addTodo,
}
