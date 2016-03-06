import { expect } from 'chai';

import * as TodoActions from '../todos';

describe('TodoActions', () => {
  it('creates new todo', () => {
    const { payload: todo } = TodoActions.addTodo('hello');

    expect(todo.text).to.eql('hello');
  });
});
