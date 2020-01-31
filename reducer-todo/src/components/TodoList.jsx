import React from 'react';
import ListItem from './ListItem';
import './sass/TodoList.scss';

const TodoList = ({ tasks, toggleCompleted }) => {
    return (
        <div className='TodoList'>
            {tasks.map(task => <ListItem duedate={task.duedate} task={task} toggleCompleted={toggleCompleted} />)}       
        </div>
    );
};

export default TodoList;