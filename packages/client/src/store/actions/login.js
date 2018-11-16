const ACTION_TYPE = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS'
};

const actionCreator = {
  loginRequest() {
    return {
      type: ACTION_TYPE.LOGIN_REQUEST
    };
  },
  loginSuccess(id, email, nickname) {
    return {
      type: ACTION_TYPE.LOGIN_SUCCESS,
      description: {
        id,
        email,
        nickname
      }
    };
  }
};

export {
  ACTION_TYPE,
  actionCreator
}
