import * as React from 'react';
import {UpdateTodoParam} from '../App';
import checkedIMG from '../../../images/checked.png';
import unCheckedIMG from '../../../images/unChecked.png';

import './Todo.css';

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
  changeIsDoneIsUpdated: (id: string, defaultValue: string, defaultUrgency: number, defaultIsDone: boolean) => void,
  changeValueIsUpdated: (event: UpdateTodoParam) => void,
  changeUrgencyIsUpdated: (event: UpdateTodoParam) => void
}

const Todo: React.FunctionComponent<ITodoStatelessProps> = ({
  alterTodo,
  deleteTodo,
  handleIsUpdatedChange,
  id,
  text,
  isUpdated,
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

  const handleClickDone = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    changeIsDoneIsUpdated(event.currentTarget.name || '', text || '', urgency || 5, isDone || false);
  };

  const handleKeyPressInput = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key === 'Enter'){
      handleClickAlter();
    }
  };

  return (
    <div className='center f2 tc fc w-50 mt4 bg-light-green br4 shadow-5 hide-child'>
        {
            isUpdated ?
                <div>
                  <input
                      type='text'
                      className='f3 mr2 br4 pa2'
                      value={changedValue}
                      onChange={changeValueIsUpdated}
                      onKeyPress={handleKeyPressInput}
                  />
                  <div
                      className='pa3 f3 tc mt4 dib white grow pointer bg-green br4 shadow-5'
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
                  </div>
                </div>
                :
                <div className='flex justify-between fc'>
                  <p className='mr1 pl4'>
                    <label htmlFor={`isDoneTodo${id}`} className='mr2'>
                      <img alt='checkboxTodo' src={isDone ? checkedIMG : unCheckedIMG} width='40' height='40' className='ml2 pointer v-mid' />
                    </label>
                    <input
                        id={`isDoneTodo${id}`}
                        type='checkbox'
                        name={id}
                        className='dn'
                        checked={isDone}
                        onChange={handleClickDone}
                    />
                  </p>
                  <p id={id} onClick={handleClick} className={`${isDone ? 'strike' : ''} fc`}>{text}</p>
                  <p className='child pointer fc pr5 red remove' onClick={handleClickDelete}/>
                </div>

        }
    </div>
  );
};

export default Todo;
