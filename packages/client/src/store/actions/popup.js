import * as POPUP_TYPE from '@constants/POPUP_TYPE'

const ACTION_TYPE = {
  SHOW_ALERT: 'SHOW_ALERT',
  SHOW_POPUP: 'SHOW_POPUP',
  HIDE_POPUP: 'HIDE_POPUP',
};

const actionCreator = {
  showAlert(alertTitle, alertMessage) {
    return {
      type: ACTION_TYPE.SHOW_ALERT,
      description: {
        popupType: POPUP_TYPE.ALERT,
        popupProps: {
          alertTitle,
          alertMessage
        }
      }
    };
  },
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
  }
};

export {
  ACTION_TYPE,
  actionCreator
}
