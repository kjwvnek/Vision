import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Switch>
          <Route
            exact
            path="/login"
            render={() => ( <Login /> )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App
