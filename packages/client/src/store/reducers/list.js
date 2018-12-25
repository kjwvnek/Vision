import { ACTION_TYPE as FETCH_ACTION_TYPE } from '@/store/actions/fetch'

const initialState = {
  recommendedFields: []
};

function reducer(state = initialState, { type, description }) {
  switch(type) {
    case FETCH_ACTION_TYPE.FETCH_RECOMMENDED_FIELDS_LIST_SUCCESS:
      return {
        ...state,
        recommendedFields: description.recommendedFields
      };
    default:
      return { ...state };
  }
}

export default reducer
