import * as React from 'react';
import * as classNames from 'classnames';

import { Todo } from '../models/todos';
import TodoTextInput from './TodoTextInput';

interface TodoItemProps {
  todo: Todo;
}
interface TodoItemState {
  editing: boolean;
};

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  render() {
    return <View>
      <Text style={styles.todo}>{ this.props.todo.label }</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  todo: {
  }
});

export default TodoItem;
