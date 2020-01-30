import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const TodoList = props => {
    return (
        <div className='TodoList'>
            {props.tasks.map(task => <ListItem item={task.item} />)}       
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {})(TodoList);