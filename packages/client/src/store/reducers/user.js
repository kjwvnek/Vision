import { ACTION_TYPE as LOGIN_ACTION_TYPE } from '@actions/login'

const initialState = {
  authentication: false,
  id: '',
  email: '',
  nickname: '',
  fields: []
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
    default:
      return {
        ...state
      };
  }
}

export default reducer
