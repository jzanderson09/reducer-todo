import React from 'react';
import './sass/ListItem.scss';

const ListItem =({ task, toggleCompleted }) => {
    return (
        <div className={'ListItem' + (task.completed ? ' completed' : '')}>
            <h3 onClick={() => toggleCompleted(task.id)}>Task:  {task.item}</h3>
        </div>
    );
};

export default ListItem;