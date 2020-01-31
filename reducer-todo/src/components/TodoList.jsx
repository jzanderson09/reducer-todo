import React from 'react';
import ListItem from './ListItem';

const TodoList = props => {
    return (
        <div className='TodoList'>
            {props.tasks.map(task => <ListItem item={task.item} />)}       
        </div>
    );
};

export default TodoList;