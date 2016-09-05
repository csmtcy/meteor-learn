import React, { Component, PropTypes } from 'react';

import { Tasks } from '../api/task.js';

// Task component - represents a single todo item
export default class Task extends Component {

  toggleChecked() {
    Meteor.call("toggleCheck", this.props.task._id, this.props.task.checked, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
         console.log("toggled!");
      }
    });
  }

  deleteThisTask() {
    Meteor.call("removeTask", this.props.task._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
         console.log("successfully deleted");
      }
    });
  }

  render() {

    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input type="checkbox" readOnly checked={this.props.task.checked} onClick={this.toggleChecked.bind(this)} />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};


Meteor.methods({
  removeTask: function(id) {
    Tasks.remove(id);
  },
  toggleCheck: function(id, checked) {
    Tasks.update(id, {
      $set : { checked: !checked }
    });
  }
});
