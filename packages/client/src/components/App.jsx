import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import cx from 'classnames'
import './App.scss'

const App = () => {
  return (
    <div styleName={cx('wrap', { is_expanded: true })}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => ( <Login /> )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App
