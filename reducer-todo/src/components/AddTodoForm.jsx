import React, { useState } from 'react';
import './sass/AddTodoListForm.scss';

const AddTodoListForm = ({ addTodo, clearCompleted }) => {
    const [todoItem, setTodoItem] = useState('');

    const changeHandler = e => {
        setTodoItem(e.target.value);
    };

    const addNewTodo = e => {
        e.preventDefault();
        addTodo(todoItem);
        setTodoItem('');
    };

    const clearCompletedTasks = () => {
        if (window.confirm('Are you sure you want to clear your completed task(s)?')) {
            clearCompleted();
        }
    };

    return (
        <div className='AddTodoListForm'>
            <form onSubmit={addNewTodo}>
                <input 
                    name='todoItem'
                    placeholder='I need to...'
                    value={todoItem}
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <button>Submit</button>
            </form>
            <button onClick={clearCompletedTasks}>Clear Completed</button>
        </div>
    );
};

export default AddTodoListForm;