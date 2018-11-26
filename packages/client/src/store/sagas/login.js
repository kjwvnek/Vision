import { call, put, takeLatest } from 'redux-saga/effects'
import { actionCreator as loginActionCreator, ACTION_TYPE as LOGIN_ACTION_TYPE } from '@actions/login';
import { actionCreator as popupActionCreator } from '@actions/popup'
import { getUserById } from '@api/get'
import { postUser ,login } from '@api/post'
import { googleAuth } from '@services/firebase'
import * as SESSION_KEY from '@constants/SESSION_KEY'

function* loginAsync() {
  let id, email, nickname, response;
  try {
    const auth = yield call(googleAuth);
    email = auth.user.email;
    
    response = yield call(login, email);
    if (response.status === 204) {
      response = yield call(postUser, email);
    }
    
    id = response.id;
    nickname = response.nickname;
    
    yield call(makeLoginSession, id);
    yield put(loginActionCreator.loginSuccess(id, email, nickname));
  } catch (e) {
    yield put(popupActionCreator.showAlert(
      '로그인 에러!',
      '서버 에러가 발생했습니다.\n다시 로그인해주시기 바랍니다.'
    ));
  }
}

function* autoLoginAsync({ description }) {
  let id = description.id;

  try {
    const user = yield call(getUserById, id);

    yield put(loginActionCreator.loginSuccess(user.id, user.email, user.nickname, user.fields))
  } catch (e) {
    yield put(popupActionCreator.showAlert(
      '서버 에러!',
      '사용자의 정보를 가져오지 못했습니다.\n다시 로그인해주시기 바랍니다.'
    ));
  }
}

function* loginWatcher() {
  yield takeLatest(LOGIN_ACTION_TYPE.LOGIN_REQUEST, loginAsync);
  yield takeLatest(LOGIN_ACTION_TYPE.AUTO_LOGIN_REQUEST, autoLoginAsync);
}

function makeLoginSession(user_id) {
  window.sessionStorage.setItem(SESSION_KEY.USER_KEY, user_id);
}

export default loginWatcher
