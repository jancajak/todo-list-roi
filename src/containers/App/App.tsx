import * as React from 'react';
import { connect } from 'react-redux';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import { AppState } from '../../store/store';
import {thunkDeleteSession, thunkUpdateSession} from '../Session/actions/thunkActions';

import {IResponseSession} from '../Session/types';

import {
  changeIsDoneTodo,
  changeUrgencyTodo,
  changeValueTodo,
  isUpdatedChange, isUpdatedChangeIsDone, isUpdatedChangeUrgency,
  isUpdatedChangeValue
} from './actions/actions';
import {thunkAddTodos, thunkAlterTodo, thunkDeleteTodo, thunkFetchTodos} from './actions/thunkActions';

import TodoList from './components/ToDoList';
import {
  IChangeIsDone,
  IChangeTodoUrgency,
  IChangeTodoValue,
  ITodoListResponse,
  IUpdatedTodo, IUpdatedTodoIsDone, IUpdatedTodoSelect, IUpdatedTodoValue,
  TodoActionTypes
} from './types';

interface IAppProps {
  addTodo: typeof thunkAddTodos,
  alterTodo: typeof thunkAlterTodo,
  deleteTodo: typeof thunkDeleteTodo,
  changeIsDoneTodo: typeof changeIsDoneTodo,
  changeIsDone: IChangeIsDone,
  changeIsUpdated: IUpdatedTodo,
  changeUrgencyTodo: typeof changeUrgencyTodo,
  changeUrgency: IChangeTodoUrgency,
  changeValueTodo: typeof changeValueTodo,
  changeValue: IChangeTodoValue,
  changeUpdatedTodoIsDone: IUpdatedTodoIsDone,
  handleChangeUpdatedTodoIsDone: typeof isUpdatedChangeIsDone,
  changeUpdatedTodoUrgency: IUpdatedTodoSelect,
  handleChangeUpdatedTodoUrgency: typeof isUpdatedChangeUrgency,
  changeUpdatedTodoValue: IUpdatedTodoValue,
  handleChangeUpdatedTodoValue: typeof isUpdatedChangeValue,
  handleFetchTodos: typeof thunkFetchTodos,
  handleIsUpdatedChange: typeof isUpdatedChange,
  session: IResponseSession,
  todosList: ITodoListResponse,
  updateSession: typeof thunkUpdateSession,
  deleteSession: typeof thunkDeleteSession
}

interface IDispatchProps {
  addTodo: (text:string, urgency: number, isDone: boolean) => ThunkAction<void, AppState, null, Action<string>>,
  alterTodo: (
      id: string,
      text:string,
      urgency: number,
      sDone: boolean
  ) => ThunkAction<void, AppState, null, Action<string>>,
  deleteTodo: (id: string) => ThunkAction<void, AppState, null, Action<string>>,
  changeIsDoneTodo: (checked: IChangeIsDone) => TodoActionTypes,
  changeValueTodo: (text: IChangeTodoValue) => TodoActionTypes,
  changeUrgencyTodo: (urgency: IChangeTodoUrgency) => TodoActionTypes,
  handleChangeUpdatedTodoIsDone: (updatedTodo: IUpdatedTodoIsDone) => TodoActionTypes,
  handleChangeUpdatedTodoValue: (updatedTodo: IUpdatedTodoValue) => TodoActionTypes,
  handleChangeUpdatedTodoUrgency: (udpatedTodo: IUpdatedTodoSelect) => TodoActionTypes,
  handleFetchTodos: () => ThunkAction<void, AppState, null, Action<string>>,
  handleIsUpdatedChange: (isUpdated: IUpdatedTodo) => TodoActionTypes,
  updateSession: (resetTimer: () => void) => ThunkAction<void, AppState, null, Action<string>>,
  deleteSession: () => ThunkAction<void, AppState, null, Action<string>>
}

export type UpdateTodoParam = React.SyntheticEvent<{ value: string }>;

export class App extends React.Component<IAppProps> {
  private timeout: NodeJS.Timeout;

  constructor(props: IAppProps) {
    super(props);
    this.timeout = setTimeout(props.deleteSession, (24 * props.session.errorRate) * 1000);
  }

  public componentDidMount(): void {
    this.props.handleFetchTodos();
  }

  public timer = (): void => {
    const counter = (24 * this.props.session.errorRate) * 1000;
    this.timeout = setTimeout(this.props.deleteSession, counter);
  };

  public resetTimer = (): void => {
    clearTimeout(this.timeout);
    this.timer();
  };

  public updateTodo = (event: UpdateTodoParam): void => {
    this.props.changeValueTodo({text: event.currentTarget.value})
  };

  public changeUrgency = (event: UpdateTodoParam): void => {
    this.props.changeUrgencyTodo({urgency: Number(event.currentTarget.value)})
  };

  public changeIsDone = (): void => {
    this.props.changeIsDoneTodo({isDone: !this.props.changeIsDone.isDone});
  };

  public changeValueIsUpdated = (event: UpdateTodoParam): void => {
    this.props.handleChangeUpdatedTodoValue({value: event.currentTarget.value})
  };

  public changeUrgencyIsUpdated = (event: UpdateTodoParam): void => {
    this.props.handleChangeUpdatedTodoUrgency({urgency: Number(event.currentTarget.value)});
  };

  public changeIsDoneIsUpdated = (): void => {
    this.props.handleChangeUpdatedTodoIsDone({isDone: !this.props.changeUpdatedTodoIsDone.isDone});
  };

  public handleIsUpdated = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      defaultValue: string,
      defaultUrgency: number,
      defaultIsDone: boolean
  ) => {
    this.props.handleIsUpdatedChange({isUpdated: event.currentTarget.id});
    this.props.handleChangeUpdatedTodoValue({value: defaultValue});
    this.props.handleChangeUpdatedTodoUrgency({urgency: defaultUrgency});
    this.props.handleChangeUpdatedTodoIsDone({isDone: defaultIsDone});
  };

  public addTodo = () => {
    const { changeValue, changeUrgency, changeIsDone } = this.props;
    this.props.addTodo(changeValue.text, changeUrgency.urgency, changeIsDone.isDone);
    this.props.updateSession(this.resetTimer);
  };

  public alterTodo = (id: string) => {
    const {
      alterTodo,
      changeUpdatedTodoIsDone,
      changeUpdatedTodoUrgency,
      changeUpdatedTodoValue,
      handleIsUpdatedChange
    } = this.props;
    handleIsUpdatedChange({isUpdated: ''});
    alterTodo(id, changeUpdatedTodoValue.value, changeUpdatedTodoUrgency.urgency, changeUpdatedTodoIsDone.isDone);
  };

  public deleteTodo = (id: string) => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };

  public render(): JSX.Element {
    const {
      changeValue,
      changeUrgency,
      changeIsDone,
      changeIsUpdated,
      changeUpdatedTodoIsDone,
      changeUpdatedTodoUrgency,
      changeUpdatedTodoValue,
      todosList
    } = this.props;
    return (
      <div className="App tc">
        <h1 className='f1 fw2 tc w-100 lh-title dib'>Your's To Do List</h1>
        <div>
            <input
                className='f3 mr2 br4 pa2'
                type='text'
                value={changeValue.text}
                placeholder='Name of todo'
                onChange={this.updateTodo}
            />
            <button
                disabled={!changeValue.text}
                className={
                  `${!changeValue.text ? `bg-gray` : `grow bg-green pointer`}
                  pa2 f3 tc mt4 dib w-10 white br4 shadow-5`
                }
                onClick={this.addTodo}>
              Add todo
            </button>
          <div className='pa3'>
            <label htmlFor='urgency' className='mr2'>Urgency</label>
            <select
                id='urgency'
                onChange={this.changeUrgency}
                value={changeUrgency.urgency}
                className='mr3'
            >
              <option value={5}>5</option>
              <option value={4}>4</option>
              <option value={3}>3</option>
              <option value={2}>2</option>
              <option value={1}>1</option>
            </select>
            <label htmlFor='isDone' className='mr2'>Already done</label>
            <input
                id='isDone'
                type='checkbox'
                checked={changeIsDone.isDone}
                onChange={this.changeIsDone}
            />
          </div>
          <div className='pa3'>
            <TodoList
                alterTodo={this.alterTodo}
                deleteTodo={this.deleteTodo}
                changedIsDone={changeUpdatedTodoIsDone.isDone}
                changeIsDoneIsUpdated={this.changeIsDoneIsUpdated}
                changedValue={changeUpdatedTodoValue.value}
                changeValueIsUpdated={this.changeValueIsUpdated}
                changedUrgency={changeUpdatedTodoUrgency.urgency}
                changeUrgencyIsUpdated={this.changeUrgencyIsUpdated}
                isUpdated={changeIsUpdated.isUpdated}
                handleIsUpdatedChange={this.handleIsUpdated}
                todos={todosList.todos}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  changeIsDone: state.changeIsDone,
  changeIsUpdated: state.changeIsUpdated,
  changeUpdatedTodoIsDone: state.changeUpdatedTodoIsDone,
  changeUpdatedTodoUrgency: state.changeUpdatedTodoUrgency,
  changeUpdatedTodoValue: state.changeUpdatedTodoValue,
  changeUrgency: state.changeUrgency,
  changeValue: state.changeValue,
  session: state.session,
  todosList: state.todosList
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
  addTodo: (description, urgency, isDone) => dispatch(thunkAddTodos(description, urgency, isDone)),
  alterTodo: (id, text, urgency, isDone) => dispatch(thunkAlterTodo(id, text, urgency, isDone)),
  changeIsDoneTodo: (checked) => dispatch(changeIsDoneTodo(checked)),
  changeUrgencyTodo: (urgency) => dispatch(changeUrgencyTodo(urgency)),
  changeValueTodo: (description) => dispatch(changeValueTodo(description)),
  deleteSession: () => dispatch(thunkDeleteSession()),
  deleteTodo: (id) => dispatch(thunkDeleteTodo(id)),
  handleChangeUpdatedTodoIsDone: (updatedTodo) => dispatch(isUpdatedChangeIsDone(updatedTodo)),
  handleChangeUpdatedTodoUrgency: (updatedTodo) => dispatch(isUpdatedChangeUrgency(updatedTodo)),
  handleChangeUpdatedTodoValue: (updatedTodo) => dispatch(isUpdatedChangeValue(updatedTodo)),
  handleFetchTodos: () => dispatch(thunkFetchTodos()),
  handleIsUpdatedChange: (isUpdated) => dispatch(isUpdatedChange(isUpdated)),
  updateSession: (resetTimer) => dispatch(thunkUpdateSession(resetTimer))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);