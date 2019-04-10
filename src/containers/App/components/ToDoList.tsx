import * as React from 'react';
import { ITodoResponse } from '../types';
import Todo from './Todo';

const TodoList = ({ todos }: {todos: ITodoResponse[]}) => {
  return (
    <div>
      {
        todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              id={todo.id}
              text={todo.text}
            />
          );
        })
      }
    </div>
  );
};

export default TodoList;
