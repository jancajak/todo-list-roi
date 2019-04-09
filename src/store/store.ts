import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { changeValueTodoReducer, todosReducer } from "../containers/App/reducers/reducer";
import { sessionReducer } from "../containers/Session/reducers/reducer";

const rootReducer = combineReducers({
  changeValue: changeValueTodoReducer,
  session: sessionReducer,
  todosList: todosReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    middleWareEnhancer
  );

  return store;
}
