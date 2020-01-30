import React from 'react';
import './App.css';

//Components:
import TodoList from './components/TodoList';

function App(props) {
  return (
    <div className="App">
      <h1>App!</h1>
      <TodoList />
    </div>
  );
}

export default App;