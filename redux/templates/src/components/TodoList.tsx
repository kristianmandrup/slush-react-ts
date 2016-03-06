import * as React from 'react';

import { Todo } from '../models/todos';
import TodoItem from './TodoItem';
import {
  SHOW_ALL,
} from '../constants/Filters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
};

interface TodoListProps {
  todos: Todo[];
  actions: any;
};
interface TodoListState {
  filter: string;
};

class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }


  handleShow(filter) {
    this.setState({ filter });
  }


  render() {
    const { todos, actions } = this.props;

    return (
      <ListView style={styles.todoList}>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            { ...actions }/>
        ) }
      </ListView>;
  }
}

const styles = StyleSheet.create({
  todoList: {
  }
});

export default TodoList;