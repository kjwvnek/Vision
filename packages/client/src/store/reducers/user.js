import { ACTION_TYPE as LOGIN_ACTION_TYPE } from '@/store/actions/login'
import { ACTION_TYPE as FETCH_ACTION_TYPE } from '@/store/actions/fetch'

const initialState = {
  authentication: false,
  id: '',
  email: '',
  nickname: '',
  fields: [],
  mentors: [],
  mentees: []
};

function reducer(state = initialState, { type, description }) {
  switch(type) {
    case LOGIN_ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        authentication: true,
        id: description.id,
        email: description.email,
        nickname: description.nickname,
        fields: description.fields
      };
    case FETCH_ACTION_TYPE.FETCH_MENTORS_AND_MENTEES_SUCCESS:
      return {
        ...state,
        mentors: description.mentors,
        mentees: description.mentees
      };
    default:
      return {
        ...state
      };
  }
}

export default reducer
