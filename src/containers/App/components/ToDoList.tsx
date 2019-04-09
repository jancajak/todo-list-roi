import * as React from 'react';
import { ITodo } from '../types';
import Todo from './Todo';

const TodoList = ({ todos }: {todos: ITodo[]}) => {
  return (
    <div>
      {
        todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              id={todo.id}
              description={todo.description}
            />
          );
        })
      }
    </div>
  );
};

export default TodoList;
