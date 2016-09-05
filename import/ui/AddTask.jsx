import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/task.js';


class AddTask extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textinput).value.trim();

    Tasks.insert({
      text,
      createAt: new Date(),
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

export default AddTask;
