import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger';
import thunkMiddleware from "redux-thunk";

import {
  todosReducer
} from '../containers/App/reducers/reducer';
import {
  changeIsDoneTodoReducer,
  changeUrgencyTodoReducer,
  changeValueTodoReducer,
} from '../containers/App/reducers/changeAddTodoReducer';
import {
  handleChangeUpdatedTodoIsDone,
  handleChangeUpdatedTodoUrgency,
  handleChangeUpdatedTodoValue,
  isUpdatedTodoReducer,
} from '../containers/App/reducers/isUpdatedReducer';
import { sessionReducer } from "../containers/Session/reducers/reducer";

const rootReducer = combineReducers({
  changeIsDone: changeIsDoneTodoReducer,
  changeIsUpdated: isUpdatedTodoReducer,
  changeUpdatedTodoIsDone: handleChangeUpdatedTodoIsDone,
  changeUpdatedTodoUrgency: handleChangeUpdatedTodoUrgency,
  changeUpdatedTodoValue: handleChangeUpdatedTodoValue,
  changeUrgency: changeUrgencyTodoReducer,
  changeValue: changeValueTodoReducer,
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
