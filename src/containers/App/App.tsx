import * as React from 'react';
import './App.css';

export interface IToDo {
  id: number,
  description: string
}

interface IAppProps {
  todos: []
}

interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <div className="App">
        <TodoList
          todos={this.props.todos}
        />
      </div>
    );
  }
}

export default App;
