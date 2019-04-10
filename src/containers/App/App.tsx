import * as React from 'react';
import { connect } from 'react-redux';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import { AppState } from '../../store/store';

import { updateSession } from '../Session/actions/actions';
import {ISessionState, SessionActionTypes} from '../Session/types';

import {changeIsDoneTodo, changeUrgencyTodo, changeValueTodo} from './actions/actions';
import {thunkAddTodos, thunkFetchTodos} from './actions/thunkActions';

import TodoList from './components/ToDoList';
import {IChangeIsDone, IChangeTodoUrgency, IChangeTodoValue, ITodoListResponse, TodoActionTypes} from './types';

interface IAppProps {
  addTodo: typeof thunkAddTodos,
  updateSession: typeof updateSession,
  changeIsDoneTodo: typeof changeIsDoneTodo,
  changeIsDone: IChangeIsDone,
  changeUrgencyTodo: typeof changeUrgencyTodo,
  changeUrgency: IChangeTodoUrgency,
  changeValueTodo: typeof changeValueTodo,
  changeValue: IChangeTodoValue,
  handleFetchTodos: typeof thunkFetchTodos,
  session: ISessionState,
  todosList: ITodoListResponse
}

interface IDispatchProps {
  addTodo: (text:string, urgency: number, isDone: boolean) => ThunkAction<void, AppState, null, Action<string>>,
  changeIsDoneTodo: (checked: IChangeIsDone) => TodoActionTypes,
  changeValueTodo: (text: IChangeTodoValue) => TodoActionTypes,
  changeUrgencyTodo: (urgency: IChangeTodoUrgency) => TodoActionTypes,
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

  public changeUrgency = (event: UpdateTodoParam) => {
    this.props.changeUrgencyTodo({urgency: Number(event.currentTarget.value)})
  };

  public changeIsDone = () => {
    this.props.changeIsDoneTodo({isDone: !this.props.changeIsDone.isDone});
  };

  public addTodo = () => {
    const { changeValue, changeUrgency, changeIsDone } = this.props;
    this.props.addTodo(changeValue.text, changeUrgency.urgency, changeIsDone.isDone);
  };

  public render(): JSX.Element {
    return (
      <div className="App">
        <input
          type='text'
          value={this.props.changeValue.text}
          placeholder='Name of todo'
          onChange={this.updateTodo}
        />
        <label htmlFor='urgency'>Choose urgency 5 is most urgent</label>
        <select id='urgency' onChange={this.changeUrgency} value={this.props.changeUrgency.urgency}>
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
        <label htmlFor='isDone'>Already done</label>
        <input id='isDone' type='checkbox' checked={this.props.changeIsDone.isDone} onChange={this.changeIsDone} />
        <TodoList
          todos={this.props.todosList.todos}
        />
        <button onClick={this.addTodo}>Click me!</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  changeIsDone: state.changeIsDone,
  changeUrgency: state.changeUrgency,
  changeValue: state.changeValue,
  fetchTodos: state.todosList,
  session: state.session,
  todosList: state.todosList
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
  addTodo: (description, urgency, isDone) => dispatch(thunkAddTodos(description, urgency, isDone)),
  changeIsDoneTodo: (checked) => dispatch(changeIsDoneTodo(checked)),
  changeUrgencyTodo: (urgency) => dispatch(changeUrgencyTodo(urgency)),
  changeValueTodo: (description) => dispatch(changeValueTodo(description)),
  handleFetchTodos: () => dispatch(thunkFetchTodos()),
  updateSession: (newSession) => dispatch(updateSession(newSession))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
