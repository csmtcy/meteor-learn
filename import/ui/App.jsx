import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/task.js';
import Task from './Task.jsx';
import AddTask from './AddTask.jsx'

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    }
  }

  toggleHideCompleted() {
    this.setState({ hideCompleted : !this.state.hideCompleted })
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }

    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount}) </h1>
        </header>

        <label className="hide-completed">
          <input
            type="checkbox"
            readOnly
            checked={this.state.hideCompleted}
            onClick={this.toggleHideCompleted.bind(this)}
          />
          Hide Completed Tasks
        </label>

        <AddTask />
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// App.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   incompleteCount: PropTypes.number.isRequired,
// };

// export const ShowNumbers = createContainer(() => {
//   Meteor.subscribe('numbers/all');
//   return {
//     numbers: Numbers.find().fetch(),
//   };
// }, _ShowNumbers);

export default createContainer(() => {
  return {
    tasks: Tasks.find().fetch({}).reverse(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  };

}, App);
