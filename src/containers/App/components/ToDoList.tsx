import * as React from 'react';
import { IToDo } from '../App';
import Todo from './Todo';

const TodoList = ({ todos }: {todos: IToDo[]}) => {
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
