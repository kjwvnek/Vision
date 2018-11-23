import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreator as popupActionCreator } from '@actions/popup'
import * as POPUP_TYPE from '@constants/POPUP_TYPE'
import Alert from '@components/__common/Popup/Alert'
import UserInfo from '@components/__common/Popup/UserInfo'

const cx = require('classnames/bind').bind(require('./popup.scss'));

const renderChildren = props => {
  const { popupType, popupProps, dispatchHidePopup } = props;

  switch(popupType) {
    case POPUP_TYPE.ALERT:
      return (
        <Alert
          title={popupProps.alertTitle}
          message={popupProps.alertMessage}
          onClickBtnOk={dispatchHidePopup}
        />
      );
    case POPUP_TYPE.USER_INFO:
      return (
        <UserInfo {...popupProps} />
      );
    default:
      return null;
  }
};

class Popup extends React.Component {
  handleScrollDimmed(e) {
    console.log('scrolled');
  }

  render() {
    const { isShownPopup, dispatchHidePopup } = this.props;
    return (
      <Fragment>
        {
          isShownPopup && (
            <div
              className={cx('popup')}>
              <div
                className={cx('background')}
                onClick={dispatchHidePopup}
                onScroll={this.handleScrollDimmed}
              />
              <div className={cx('children')}>
                {renderChildren(this.props)}
              </div>
            </div>
          )
        }
      </Fragment>
    );
  }
}

export default connect(
  function mapStateToProps({ global }) {
    const { isShownPopup, popupType, popupProps } = global;
    return {
      isShownPopup,
      popupType,
      popupProps
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatchHidePopup() {
        dispatch(popupActionCreator.hidePopup());
      }
    };
  }
)(Popup)
