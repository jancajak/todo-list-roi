import * as React from 'react';
import { connect } from 'react-redux';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import { AppState } from '../../store/store';

import { updateSession } from '../Session/actions/actions';
import {ISessionState, SessionActionTypes} from '../Session/types';

import {addTodo, changeValueTodo} from './actions/actions';
import { thunkFetchTodos } from './actions/thunkActions';

import TodoList from './components/ToDoList';
import {IChangeTodoValue, ITodoListResponse, TodoActionTypes} from './types';

interface IAppProps {
  addTodo: typeof addTodo,
  updateSession: typeof updateSession,
  changeValueTodo: typeof changeValueTodo,
  changeValue: IChangeTodoValue,
  handleFetchTodos: typeof thunkFetchTodos,
  session: ISessionState,
  todosList: ITodoListResponse
}

interface IDispatchProps {
  addTodo: (text:IChangeTodoValue) => TodoActionTypes,
  changeValueTodo: (text: IChangeTodoValue) => TodoActionTypes,
  handleFetchTodos: () => ThunkAction<void, AppState, null, Action<string>>,
  updateSession: (newSession: ISessionState) => SessionActionTypes
}

export type UpdateTodoParam = React.SyntheticEvent<{ value: string }>;

export class App extends React.Component<IAppProps> {
  public componentDidMount(): void {
    this.props.handleFetchTodos();
  }

  public updateTodo = (event: UpdateTodoParam) => {
    this.props.changeValueTodo({text: event.currentTarget.value})
  };

  public addTodo = () => {
    this.props.addTodo({text: this.props.changeValue.text});
  };

  public render(): JSX.Element {
    return (
      <div className="App">
        <input
          type='text'
          value={this.props.changeValue.text}
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
  fetchTodos: state.todosList,
  session: state.session,
  todosList: state.todosList
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
  addTodo: (description) => dispatch(addTodo(description)),
  changeValueTodo: (description) => dispatch(changeValueTodo(description)),
  handleFetchTodos: () => dispatch(thunkFetchTodos()),
  updateSession: (newSession) => dispatch(updateSession(newSession))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
