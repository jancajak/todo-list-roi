import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '../../store/store';

import { updateSession } from '../Session/actions/actions';
import { ISessionState } from '../Session/types';

import { addTodo, changeValueTodo } from './actions/actions';
import TodoList from './components/ToDoList';
import { IChangeTodoValue, ITodoList } from './types';

interface IAppProps {
  addTodo: typeof addTodo,
  updateSession: typeof updateSession,
  changeValueTodo: typeof changeValueTodo,
  changeValue: IChangeTodoValue,
  session: ISessionState,
  todosList: ITodoList
}

interface IDispatchProps {
  addTodo: (description:IChangeTodoValue) => void,
  changeValueTodo: (description: IChangeTodoValue) => void,
  updateSession: (newSession: ISessionState) => void
}

export type UpdateTodoParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<IAppProps> {
  public componentDidMount(): void {
    this.props.updateSession({
      loggedIn: true,
      session: "my session"
    });
  }

  public updateTodo = (event: UpdateTodoParam) => {
    this.props.changeValueTodo({description: event.currentTarget.value})
  };

  public addTodo = () => {
    this.props.addTodo({description: this.props.changeValue.description});
  };

  public render(): JSX.Element {
    return (
      <div className="App">
        <input
          type='text'
          value={this.props.changeValue.description}
          onChange={this.updateTodo}
        />
        <TodoList
          todos={this.props.todosList.todos}
        />
        <button onClick={this.addTodo}>Click me!</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  changeValue: state.changeValue,
  session: state.session,
  todosList: state.todosList
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
  addTodo: (description) => dispatch(addTodo(description)),
  changeValueTodo: (description) => dispatch(changeValueTodo(description)),
  updateSession: (newSession) => dispatch(updateSession(newSession))
});


export default connect<AppState, IDispatchProps>(mapStateToProps, mapDispatchToProps)(App);
