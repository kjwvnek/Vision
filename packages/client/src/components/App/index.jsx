import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from '@routes'
import Popup from '@components/__common/Popup'
import './app.scss'

const App = () => {
  return (
    <div styleName="wrap">
      <BrowserRouter>
        <Switch>
          {
            routes.map(({ path, component }) => (
              <Route
                key={`route-${path}`}
                exact
                path={path}
                component={component}
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
