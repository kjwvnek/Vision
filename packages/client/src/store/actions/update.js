const ACTION_TYPE = {
  UPDATE_USER_INFO_REQUEST: 'UPDATE_USER_INFO_REQUEST'
};

const actionCreator = {
  updateUserInfoRequest(user) {
    return {
      type: ACTION_TYPE.UPDATE_USER_INFO_REQUEST,
      description: {
        user
      }
    };
  }
};

export {
  ACTION_TYPE,
  actionCreator
}
