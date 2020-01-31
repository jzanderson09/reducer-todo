import React, { useReducer } from 'react';
import { initialState, todoListReducer } from './reducers';
import './App.css';

//Components:
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const addTodo = newTask => {
    dispatch({ type: "ADD_TODO", payload: newTask });
};

const toggleCompleted = taskId => {
  dispatch({ type: "TOGGLE_COMPLETED", payload: taskId });
};

  return (
    <div className="App">
      <h1>App!</h1>
      <TodoList tasks={state.tasks} toggleCompleted={toggleCompleted} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;