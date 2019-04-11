import * as React from 'react';
import {UpdateTodoParam} from '../App';

interface ITodoStatelessProps {
  id?: string,
  text?: string,
  urgency?: number,
  isDone?: boolean,
  index: number,
  isUpdated: boolean,
  alterTodo: (id: string) => void,
  deleteTodo: (id: string) => void,
  handleIsUpdatedChange: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      value: string,
      urgency: number,
      isDone: boolean
  ) => void,
  changedIsDone: boolean,
  changedValue: string,
  changedUrgency: number,
  changeIsDoneIsUpdated: () => void,
  changeValueIsUpdated: (event: UpdateTodoParam) => void,
  changeUrgencyIsUpdated: (event: UpdateTodoParam) => void
}

const Todo: React.FunctionComponent<ITodoStatelessProps> = ({
  alterTodo,
  deleteTodo,
  handleIsUpdatedChange,
  index,
  id,
  text,
  isUpdated,
  changedIsDone,
  changeIsDoneIsUpdated,
  changedValue,
  changeValueIsUpdated,
  changedUrgency,
  changeUrgencyIsUpdated,
  urgency,
  isDone,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    handleIsUpdatedChange(event, text || '', urgency || 5, isDone || false);
  };

  const handleClickAlter = (): void => {
    alterTodo(id || '');
  };

  const handleClickDelete = (): void => {
    deleteTodo(id || '');
  };

  return (
    <div className='center f2 tc fc w-50 pv1 mt4 bg-light-green br4 shadow-5 hide-child'>
        {
            isUpdated ?
                <div>
                  <input
                      type='text'
                      className='f3 mr2 br4 pa2'
                      value={changedValue}
                      onChange={changeValueIsUpdated}
                  />
                  <div
                      className='pa2 f3 tc mt4 dib w-10 white grow pointer bg-green br4 shadow-5'
                      onClick={handleClickAlter}>
                    Save
                  </div>
                  <div className='pa3 f5'>
                    <label htmlFor='urgencyUpdatedTodo' className='mr2'>Change actual urgency</label>
                    <select
                        id='urgencyUpdatedTodo'
                        className='mr3'
                        value={changedUrgency}
                        onChange={changeUrgencyIsUpdated}>
                      <option value={5}>5</option>
                      <option value={4}>4</option>
                      <option value={3}>3</option>
                      <option value={2}>2</option>
                      <option value={1}>1</option>
                    </select>
                    <label htmlFor='isDone' className='mr2'>Done</label>
                    <input
                        id='isDone'
                        type='checkbox'
                        checked={changedIsDone}
                        onChange={changeIsDoneIsUpdated}
                    />
                  </div>
                </div>
                :
                <div className='flex justify-between fc'>
                  <p className='mr1 pl4'>{index + 1}.</p>
                  <p id={id} onClick={handleClick} className={`${isDone ? 'strike' : ''} fc`}>{text}</p>
                  <p className='child pointer fc pr4 red' onClick={handleClickDelete}>
                    X
                  </p>
                </div>

        }
    </div>
  );
};

export default Todo;
