import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from '../reducers';

import App from '../import/ui/App.jsx';

let store = createStore(todo);

if(Meteor.isClient){
  Meteor.startup(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('render-target'));
  });
}
