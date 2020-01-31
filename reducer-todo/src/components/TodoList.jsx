import React from 'react';
import ListItem from './ListItem';

const TodoList = ({ tasks, toggleCompleted }) => {
    return (
        <div className='TodoList'>
            {tasks.map(task => <ListItem task={task} toggleCompleted={toggleCompleted} />)}       
        </div>
    );
};

export default TodoList;