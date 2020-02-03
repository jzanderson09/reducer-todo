import React from 'react';
import './sass/ListItem.scss';

const ListItem = ({ task, toggleCompleted }) => {
    return (
        <div className={'ListItem' + (task.completed ? ' completed' : '')}
            onClick={() => toggleCompleted(task.id)}
        >
            <h3>Task:  {task.item}</h3>
            <p className={'due-date' + (task.completed ? ' completed' : '')}>{`Due By: ${task.dueDate}`}</p>
        </div>
    );
};

export default ListItem;