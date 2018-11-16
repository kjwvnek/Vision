const ACTION_TYPE = {
  SHOW_MODAL: 'SHOW_MODAL',
  SHOW_ALERT: 'SHOW_ALERT',
  HIDE_POPUP: 'HIDE_POPUP',
};

const actionCreator = {
  showModal(renderModal) {
    return {
      type: ACTION_TYPE.SHOW_MODAL,
      description: {
        renderModal
      }
    };
  },
  showAlert(alertTitle, alertMessage) {
    return {
      type: ACTION_TYPE.SHOW_ALERT,
      description: {
        alertTitle,
        alertMessage
      }
    }
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
