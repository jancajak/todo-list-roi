import * as React from 'react';
import {UpdateTodoParam} from '../App';
import { ITodoResponse } from '../types/types';
import Todo from './Todo';

const TodoList = (
    {
        alterTodo,
        deleteTodo,
        handleIsUpdatedChange,
        isUpdated,
        todos,
        changedIsDone,
        changeIsDoneIsUpdated,
        changedValue,
        changeValueIsUpdated,
        changedUrgency,
        changeUrgencyIsUpdated
    }
    :
    {
      alterTodo: (id: string) => void,
      deleteTodo: (id: string) => void,
      handleIsUpdatedChange: (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>,
          value: string,
          urgency: number,
          isDone: boolean
      ) => void,
      isUpdated: string,
      todos: ITodoResponse[],
      changedIsDone: boolean,
      changeIsDoneIsUpdated: () => void,
      changedValue: string,
      changeValueIsUpdated: (event: UpdateTodoParam) => void,
      changedUrgency: number,
      changeUrgencyIsUpdated: (event: UpdateTodoParam) => void,
    }
) => {
  return (
    <div>
      {
        todos.map((todo, i) => {
          return (
            <Todo
              alterTodo={alterTodo}
              deleteTodo={deleteTodo}
              key={i}
              index={i}
              changedIsDone={changedIsDone}
              changeIsDoneIsUpdated={changeIsDoneIsUpdated}
              changedValue={changedValue}
              changedUrgency={changedUrgency}
              changeValueIsUpdated={changeValueIsUpdated}
              changeUrgencyIsUpdated={changeUrgencyIsUpdated}
              handleIsUpdatedChange={handleIsUpdatedChange}
              id={todo.id}
              urgency={todo.urgency}
              isDone={todo.isCompleted}
              isUpdated={todo.id === isUpdated}
              text={todo.text}
            />
          );
        })
      }
    </div>
  );
};

export default TodoList;
