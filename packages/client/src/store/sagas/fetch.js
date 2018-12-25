import { put, takeLatest } from 'redux-saga/effects'
import { actionCreator as fetchActionCreator, ACTION_TYPE as FETCH_ACTION_TYPE } from '@/store/actions/fetch'
import { actionCreator as popupActionCreator } from '@/store/actions/popup'
import { getUserById } from '@/api/get'

function* fetchFieldsAsync() {
  try {
    // TODO: 추천 분야 리스트
    yield put(fetchActionCreator.fetchRecommendedFieldsListSuccess(null));
  } catch (e) {
    // 기획 없음.
  }
}

function* fetchMentorsAndMentees({ description }) {
  try {
    const { id } = description;
    const user = yield call(getUserById, id);
    yield put(fetchActionCreator.fetchMentorsAndMenteesSuccess(user.mentors, user.mentees));
  } catch (e) {
    yield put(popupActionCreator.showAlert(
      '서버 에러!',
      '멘토와 멘티 정보를 가져올 수 없습니다.'
    ));
  }
}

function* fetchWatcher() {
  yield takeLatest(FETCH_ACTION_TYPE.FETCH_RECOMMENDED_FIELDS_LIST_REQUEST, fetchFieldsAsync);
  yield takeLatest(FETCH_ACTION_TYPE.FETCH_MENTORS_AND_MENTEES_REQUEST, fetchMentorsAndMentees);
}

export default fetchWatcher
