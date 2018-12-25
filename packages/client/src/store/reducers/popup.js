import { ACTION_TYPE as LOGIN_ACTION_TYPE } from '@/store/actions/login'
import { ACTION_TYPE as POPUP_ACTION_TYPE } from '@/store/actions/popup'
import * as POPUP_TYPES from '@/constants/POPUP_TYPE'

const initialState = {
  isShownPopup: false,
  popupType: '',
  popupProps: {}
};

function reducer(state = initialState, { type, description }) {
  switch(type) {
    case LOGIN_ACTION_TYPE.LOGIN_REQUEST:
      return {
        ...state,
        isShownPopup: true,
        popupType: POPUP_TYPES.FETCHING
      };
    case LOGIN_ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        isShownPopup: false
      };
    case POPUP_ACTION_TYPE.SHOW_POPUP:
      return {
        ...state,
        isShownPopup: true,
        popupType: description.popupType,
        popupProps: description.popupProps
      };
    case POPUP_ACTION_TYPE.HIDE_POPUP:
      return {
        ...state,
        isShownPopup: false
      };
    case POPUP_ACTION_TYPE.SHOW_USER_INFO_POPUP_REQUEST:
      return {
        ...state,
        isShownPopup: true,
        popupType: POPUP_TYPES.FETCHING
      };
    default:
      return {
        ...state
      };
  }
}

export default reducer
