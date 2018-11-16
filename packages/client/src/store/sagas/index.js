import { all } from 'redux-saga/effects'
import loginWatcher from './login'

function* sagas() {
  yield all([
    loginWatcher()
  ])
}

export default sagas
