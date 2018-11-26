import { put, takeLatest } from 'redux-saga/effects'
import { actionCreator as fetchActionCreator, ACTION_TYPE as FETCH_ACTION_TYPE } from '@actions/fetch'

function* fetchFieldsAsync() {
  try {
    // TODO: 추천 분야 리스트
    yield put(fetchActionCreator.fetchRecommendedFieldsListSuccess(null));
  } catch (e) {
    // 기획 없음.
  }
}

function* fetchWatcher() {
  yield takeLatest(FETCH_ACTION_TYPE.FETCH_RECOMMENDED_FIELDS_LIST_REQUEST, fetchFieldsAsync);
}

export default fetchWatcher
