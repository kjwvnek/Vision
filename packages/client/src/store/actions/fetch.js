const ACTION_TYPE = {
  FETCH_RECOMMENDED_FIELDS_LIST_REQUEST: 'FETCH_RECOMMENDED_FIELDS_LIST_REQUEST',
  FETCH_RECOMMENDED_FIELDS_LIST_SUCCESS: 'FETCH_RECOMMENDED_FIELDS_LIST_SUCCESS'
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
  }
};

export {
  ACTION_TYPE,
  actionCreator
}
