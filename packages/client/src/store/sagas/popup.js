import { call, put, takeLatest } from 'redux-saga/effects'
import { actionCreator as popupActionCreator, ACTION_TYPE as POPUP_ACTION_TYPE } from '@/store/actions/popup'
import { getUserById } from '@/api/get'

function* showUserInfoPopupAsync({ description }) {
  const userId = description.userId;

  try {
    const user = yield call(getUserById, userId);
    
    yield put(popupActionCreator.showUserInfoPopup(user))
  } catch (e) {
    yield put(popupActionCreator.showAlert(
      '서버 에러!',
      '서버 에러가 발생해서 사용자 정보를 불러오지 못했습니다.\n 다시 시도해주시기 바랍니다.'
    ));
  }
}

function* popupWatcher() {
  yield takeLatest(POPUP_ACTION_TYPE.SHOW_USER_INFO_POPUP_REQUEST, showUserInfoPopupAsync);
}

export default popupWatcher
