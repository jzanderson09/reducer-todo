import React from 'react';
import ListItem from './ListItem';
import './sass/TodoList.scss';

const TodoList = ({ tasks, toggleCompleted }) => {
    if (tasks.length !== 0) {
        return (
            <div className='TodoList'>
                {tasks.map(task => <ListItem task={task} toggleCompleted={toggleCompleted} />)}       
            </div>
        );
    }
    else {
        return (
            <div className='TodoList'>
                <h3>You have no tasks to complete!  Add a task below to start your list!</h3>
            </div>
        );
    }
};

export default TodoList;