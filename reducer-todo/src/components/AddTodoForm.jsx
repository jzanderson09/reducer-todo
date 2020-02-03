import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './sass/AddTodoListForm.scss';

const AddTodoListForm = ({ addTodo, clearCompleted }) => {
    const [todoItem, setTodoItem] = useState('');
    const [date, setDate] = useState(new Date());

    const changeHandler = e => setTodoItem(e.target.value);

    const dateChange = date => setDate(date);

    const addNewTodo = e => {
        e.preventDefault();
        const newTodo = {
            item: todoItem,
            dueDate: date
        };
        addTodo(newTodo);
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
                <h3>By:  </h3>
                <div className='date-time-picker'>
                    <DateTimePicker
                        style={{ width: '10%' }}
                        onChange={dateChange}
                        value={date}
                    />
                </div>
                <button><p>Submit</p></button>
            </form>
            <button onClick={clearCompletedTasks}><p>Clear Completed</p></button>
        </div>
    );
};

export default AddTodoListForm;