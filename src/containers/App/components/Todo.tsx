import * as React from 'react';

interface ITodoStatelessProps {
  id?: string,
  text?: string
}

const Todo: React.FunctionComponent<ITodoStatelessProps> = ({id, text}) => {
  return (
    <div>
      <div>
        {id}
      </div>
      <div>
        {text}
      </div>
    </div>
  );
};

export default Todo;
