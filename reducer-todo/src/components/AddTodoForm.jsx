import React, { useState } from 'react';
import './sass/AddTodoListForm.scss';

const AddTodoListForm = ({ addTodo }) => {
    const [todoItem, setTodoItem] = useState('');

    const changeHandler = e => {
        setTodoItem(e.target.value);
    };

    const addNewTodo = e => {
        e.preventDefault();
        addTodo(todoItem);
        setTodoItem('');
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
        </div>
    );
};

export default AddTodoListForm;