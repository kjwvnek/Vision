import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreator as popupActionCreator } from '@actions/popup'
import * as POPUP_TYPE from '@constants/POPUP_TYPE'
import Alert from '@components/__common/Alert'

const cx = require('classnames/bind').bind(require('./popup.scss'));

const renderChildren = props => {
  const { popupType, renderModal, alertTitle, alertMessage, hidePopup } = props;
  return (
    <Fragment>
      {
        popupType === POPUP_TYPE.MODAL ? (
          renderModal()
        ) : popupType === POPUP_TYPE.ALERT ? (
          <Alert onClickBtnOk={hidePopup} title={alertTitle} message={alertMessage}  />
        ) : null
      }
    </Fragment>
  )
};

const Dimmed = props => {
  const { isShown, hidePopup } = props;
  return (
    <Fragment>
      {
        isShown && (
          <div className={cx('popup')}>
            <div
              className={cx('background')}
              onClick={hidePopup}
            />
            <div className={cx('children')}>
              {renderChildren(props)}
            </div>
          </div>
        )
      }
    </Fragment>
  )
};

export default connect(
  function mapStateToProps({ global }) {
    const { isShownPopup, popupType, renderModal, alertTitle, alertMessage } = global;
    return {
      isShown: isShownPopup,
      popupType,
      renderModal,
      alertTitle,
      alertMessage
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      hidePopup() {
        dispatch(popupActionCreator.hidePopup());
      }
    };
  }
)(Dimmed)
