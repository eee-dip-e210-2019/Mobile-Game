import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import AppRoutes from './routes';
import './style.scss';

import NotFoundPage from './containers/NotFoundPage';

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        {AppRoutes.map(prop =>
          prop.redirect ? (
            <Redirect from={prop.path} to={prop.to} key={prop.path} />
          ) : (
            <Route {...prop} key={prop.path} />
          ),
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
