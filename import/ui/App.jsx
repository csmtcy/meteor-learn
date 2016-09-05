import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/task.js';
import Task from './Task.jsx';
import AddTask from './AddTask.jsx'

// App component - represents the whole app
export default class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <AddTask />
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
