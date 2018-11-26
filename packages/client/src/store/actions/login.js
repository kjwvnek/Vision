const ACTION_TYPE = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  AUTO_LOGIN_REQUEST: 'AUTO_LOGIN_REQUEST',
};

const actionCreator = {
  loginRequest() {
    return {
      type: ACTION_TYPE.LOGIN_REQUEST
    };
  },
  loginSuccess(id, email, nickname, fields) {
    return {
      type: ACTION_TYPE.LOGIN_SUCCESS,
      description: {
        id,
        email,
        nickname,
        fields
      }
    };
  },
  autoLoginRequest(id) {
    return {
      type: ACTION_TYPE.AUTO_LOGIN_REQUEST,
      description: {
        id
      }
    };
  }
};

export {
  ACTION_TYPE,
  actionCreator
}
