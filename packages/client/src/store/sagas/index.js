import { all } from 'redux-saga/effects'
import loginWatcher from './login'
import popupWatcher from './popup'
import updateWatcher from './update'

function* sagas() {
  yield all([
    loginWatcher(),
    popupWatcher(),
    updateWatcher()
  ]);
}

export default sagas
