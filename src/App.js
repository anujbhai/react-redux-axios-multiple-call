import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';
import Player from './components/Player';

const App = () => {
  return (
    <Provider store={ store }>
      <>
        <Player />
      </>
    </Provider>
  );
};

export default App;
