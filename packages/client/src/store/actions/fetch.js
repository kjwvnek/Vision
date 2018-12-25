const ACTION_TYPE = {
  FETCH_RECOMMENDED_FIELDS_LIST_REQUEST: 'FETCH_RECOMMENDED_FIELDS_LIST_REQUEST',
  FETCH_RECOMMENDED_FIELDS_LIST_SUCCESS: 'FETCH_RECOMMENDED_FIELDS_LIST_SUCCESS',
  FETCH_MENTORS_AND_MENTEES_REQUEST: 'FETCH_MENTORS_AND_MENTEES_REQUEST',
  FETCH_MENTORS_AND_MENTEES_SUCCESS: 'FETCH_MENTORS_AND_MENTEES_SUCCESS'
};

const actionCreator = {
  fetchRecommendedFieldsListRequest() {
    return {
      type: ACTION_TYPE.FETCH_RECOMMENDED_FIELDS_LIST_REQUEST
    };
  },
  fetchRecommendedFieldsListSuccess(recommendedFields) {
    return {
      type: ACTION_TYPE.FETCH_RECOMMENDED_FIELDS_LIST_SUCCESS,
      description: {
        recommendedFields
      }
    };
  },
  fetchMentorsAndMenteesRequest(id) {
    return {
      type: ACTION_TYPE.FETCH_MENTORS_AND_MENTEES_REQUEST,
      description: {
        id
      }
    };
  },
  fetchMentorsAndMenteesSuccess(mentors, mentees) {
    return {
      type: ACTION_TYPE.FETCH_MENTORS_AND_MENTEES_SUCCESS,
      description: {
        mentors,
        mentees
      }
    };
  }
};

export {
  ACTION_TYPE,
  actionCreator
}
