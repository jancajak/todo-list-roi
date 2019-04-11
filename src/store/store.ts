import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger';
import thunkMiddleware from "redux-thunk";

import {
  changeIsDoneTodoReducer,
  changeUrgencyTodoReducer,
  changeValueTodoReducer,
  handleChangeUpdatedTodoIsDone,
  handleChangeUpdatedTodoUrgency,
  handleChangeUpdatedTodoValue,
  isUpdatedTodoReducer,
  todosReducer
} from '../containers/App/reducers/reducer';
import { sessionReducer } from "../containers/Session/reducers/reducer";

const rootReducer = combineReducers({
  changeIsDone: changeIsDoneTodoReducer,
  changeIsUpdated: isUpdatedTodoReducer,
  changeUpdatedTodoIsDone: handleChangeUpdatedTodoIsDone,
  changeUpdatedTodoUrgency: handleChangeUpdatedTodoUrgency,
  changeUpdatedTodoValue: handleChangeUpdatedTodoValue,
  changeUrgency: changeUrgencyTodoReducer,
  changeValue: changeValueTodoReducer,
  fetchTodos: todosReducer,
  session: sessionReducer,
  todosList: todosReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    middleWareEnhancer
  );

  return store;
}
