import React from 'react';

const ListItem = props => {
    return (
        <div className='ListItem'>
            <h3>Task:  {props.item}</h3>
        </div>
    );
};

export default ListItem;