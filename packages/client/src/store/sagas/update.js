import { call, put, takeLatest } from 'redux-saga/effects'
import { ACTION_TYPE as USER_ACTION_TYPE } from '@actions/update'
import { putUserInfo } from '@api/put'
import {actionCreator as popupActionCreator} from "@actions/popup";

function* updateUserInfoAsync({ description }) {
  try {
    const response = yield call(putUserInfo, description.user);
    
    if (response.status !== 200) {
      yield put(popupActionCreator.showAlert(
        '수정 실패!',
        '서버 에러가 발생했습니다.\n다시 시도해주시기 바랍니다.'
      ));
    }
  } catch (e) {
    yield put(popupActionCreator.showAlert(
      '수정 실패!',
      '서버 에러가 발생했습니다.\n다시 시도해주시기 바랍니다.'
    ));
  }
}

function* updateWatcher() {
  yield takeLatest(USER_ACTION_TYPE.UPDATE_USER_INFO_REQUEST, updateUserInfoAsync);
}

export default updateWatcher
