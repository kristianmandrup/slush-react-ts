import { expect } from 'chai';

import { Todo } from '../../models/todos';
import todos from '../todos';

import {
  ADD_TODO,
} from '../../constants/ActionTypes';

describe('todo reducer', () => {
  it('handles add', () => {
    let state: Todo[] = [{ id: 0, text: '', completed: true }];

    state = todos(state, {
      type: ADD_TODO,
      payload: { text: 'hello', completed: false }
    });

    expect(state[0]).to.eql(
      { id: 1, text: 'hello', completed: false }
    );
  });
});
