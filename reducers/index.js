import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from '../actions';

function todo(state=[], action) {
  switch (action.type) {
    case ADD_TODO: {
      return
      [
        ...state,
        {
          text: action.text
        }
      ]
    }
  }
}

export default todo;
