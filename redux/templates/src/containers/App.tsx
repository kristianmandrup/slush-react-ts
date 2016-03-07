import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

// import { TodoList } from '../components/TodoList';
// import * as TodoActions from '../actions/todos';
// import { Todo } from '../models/todos';

interface AppProps {
  // todos: Todo[];
  dispatch: Dispatch;
}

class App extends React.Component<AppProps, void> {
  render() {
    // const { todos, dispatch } = this.props;
    // const actions = bindActionCreators(TodoActions, dispatch);
    // return <TodoList
    //       todos={todos}
    //       actions={actions}/>
    //   </TodoList>
    return <View><Text>Hello World</Text></View>;
  }
}

const mapStateToProps = state => ({
  // todos: state.todos
});

export default connect(mapStateToProps)(App);
