import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/task.js';


class AddTask extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textinput).value.trim();

    Meteor.call("addTask", text, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
         console.log("added new task");
      }
    });

    ReactDOM.findDOMNode(this.refs.textinput).value = "";

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" placeholder="Enter task ... " ref="textinput" className='form-control' />
        </form>
      </div>
    );
  }

}

Meteor.methods({
  addTask:function(title){
    Tasks.insert({
      text: title,
      createAt: new Date(),
    });
  }
});

export default AddTask;
