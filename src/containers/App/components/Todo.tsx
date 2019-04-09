import * as React from 'react';

interface ITodoStatelessProps {
  id: number,
  description: string
}

const Todo: React.FunctionComponent<ITodoStatelessProps> = ({id, description}) => {
  return (
    <div>
      <div>
        {id}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
};

export default Todo;
