import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from '@routes'
import Popup from '@components/__common/Popup'
import './app.scss'

// Global Importing
import '@exec/bodymovin.min.exec'

const App = () => {
  return (
    <div styleName="wrap">
      <BrowserRouter>
        <Switch>
          {
            routes.map(({ path, render }) => (
              <Route
                key={`route-${path}`}
                exact
                path={path}
                render={render}
              />
            ))
          }
        </Switch>
      </BrowserRouter>
      <Popup />
    </div>
  );
};

export default App
