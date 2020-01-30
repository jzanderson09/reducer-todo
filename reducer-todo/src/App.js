import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>App!</h1>
      {props.tasks.map(task => {
        return (
          <div>
            <h3>{task.item}</h3>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {})(App);