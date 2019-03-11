import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import 'normalize.css/normalize.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
serviceWorker.register();
