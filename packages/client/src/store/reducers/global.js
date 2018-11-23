import { ACTION_TYPE as LOGIN_ACTION_TYPE } from '@actions/login'
import { ACTION_TYPE as POPUP_ACTION_TYPE } from '@actions/popup'
import * as POPUP_TYPE from '@constants/POPUP_TYPE'

const initialState = {
  fetching: false,
  isShownPopup: false,
  popupType: '',
  alertTitle: '',
  alertMessage: ''
};

function reducer(state = initialState, { type, description }) {
  switch(type) {
    case LOGIN_ACTION_TYPE.LOGIN_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case LOGIN_ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false
      };
    case POPUP_ACTION_TYPE.SHOW_POPUP:
    case POPUP_ACTION_TYPE.SHOW_ALERT:
      return {
        ...state,
        fetching: false,
        isShownPopup: true,
        popupType: description.popupType,
        popupProps: description.popupProps
      };
    case POPUP_ACTION_TYPE.HIDE_POPUP:
      return {
        ...state,
        isShownPopup: false,
        alertTitle: '',
        alertMessage: ''
      };
    default:
      return {
        ...state
      };
  }
}

export default reducer
