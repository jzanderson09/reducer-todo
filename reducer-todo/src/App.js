import React, { useReducer } from 'react';
import { initialState, todoListReducer } from './reducers';
import './App.css';

//Components:
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const addTodo = newTask => {
    const newTodo = { 
        item: newTask,
        completed: false,
        id: Date.now()
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
};

  return (
    <div className="App">
      <h1>App!</h1>
      <TodoList tasks={state.tasks} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;