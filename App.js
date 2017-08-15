import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import Kard from './src/Kard';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Kard />
      </Provider>
    );
  }
}
