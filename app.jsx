import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InviteContainer from './containers/invite_container';
import store from './store/store';
import "./stylesheets/main.scss";

const app = (
  <Provider store={store}>
    <InviteContainer />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));