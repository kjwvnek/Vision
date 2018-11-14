import { call, put, takeLatest } from 'redux-saga/effects'
import * as ACTIONS from 'Constants/ACTIONS'
import { getUserByEmail } from 'Api/user'

function* loginAsync({ type, description }) {
  try {
    const user = yield call(getUserByEmail, description.email);
    yield put({
      type: ACTIONS.LOGIN_SUCCESS,
      description: {
        firstLogin: user.status === 204,
        id: user.user_id,
        email: user.email,
        nickname: user.nickname
      }
    });
  } catch (e) {
    yield put({
      type: ACTIONS.LOGIN_FAILURE
    });
  }
}

function* sagas() {
  yield takeLatest(ACTIONS.LOGIN_REQUEST, loginAsync);
}

export default sagas
