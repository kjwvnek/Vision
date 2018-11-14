import * as ACTIONS from 'Constants/ACTIONS'

const initialState = {
  fetching: false,
  authentication: false,
  firstLogin: false,
  id: '',
  email: '',
  nickname: '',
  my_channels: []
};

function reducer(state = initialState, { type, description }) {
  switch(type) {
    case ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        authentication: true,
        id: description.id,
        email: description.email,
        nickname: description.nickname,
        my_channels: []
      };
    default:
      return {
        ...state
      };
  }
}

export default reducer
