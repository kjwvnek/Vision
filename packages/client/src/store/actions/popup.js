import * as POPUP_TYPE from '@/constants/POPUP_TYPE'

const ACTION_TYPE = {
  SHOW_POPUP: 'SHOW_POPUP',
  HIDE_POPUP: 'HIDE_POPUP',
  SHOW_USER_INFO_POPUP_REQUEST: 'SHOW_USER_INFO_POPUP_REQUEST'
};

const actionCreator = {
  showPopup(popupType, popupProps) {
    return {
      type: ACTION_TYPE.SHOW_POPUP,
      description: {
        popupType,
        popupProps
      }
    };
  },
  hidePopup() {
    return {
      type: ACTION_TYPE.HIDE_POPUP
    };
  },
  showAlert(title, message) {
    return {
      type: ACTION_TYPE.SHOW_POPUP,
      description: {
        popupType: POPUP_TYPE.ALERT,
        popupProps: {
          title,
          message
        }
      }
    };
  },
  showUserInfoPopup(user) {
    return {
      type: ACTION_TYPE.SHOW_POPUP,
      description: {
        popupType: POPUP_TYPE.USER_INFO,
        popupProps: {
          user
        }
      }
    }
  },
  requestUserInfoPopup(userId) {
    return {
      type: ACTION_TYPE.SHOW_USER_INFO_POPUP_REQUEST,
      description: {
        userId
      }
    }
  }
};

export {
  ACTION_TYPE,
  actionCreator
}
