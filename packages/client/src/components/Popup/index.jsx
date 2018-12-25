import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreator as popupActionCreator } from '@/store/actions/popup'
import * as POPUP_TYPE from '@/constants/POPUP_TYPE'
import Alert from '@/components/Popup/Alert'
import UserInfo from '@/components/Popup/UserInfo'
import LottieAnimation from '@/components/__utils/LottieAnimation'

const cx = require('classnames/bind').bind(require('./popup.scss'));

const renderChildren = props => {
  const { popupType, popupProps, dispatchHidePopup } = props;

  switch(popupType) {
    case POPUP_TYPE.ALERT:
      return (
        <Alert
          title={popupProps.title}
          message={popupProps.message}
          onClickBtnOk={dispatchHidePopup}
        />
      );
    case POPUP_TYPE.FETCHING:
      return (
        <LottieAnimation
          name="fetching"
          loop={true}
          containerClassName={cx('fetching-animation-container')}
        />
      );
    case POPUP_TYPE.USER_INFO:
      return (
        <UserInfo user={popupProps.user} />
      );
    default:
      return null;
  }
};

class Popup extends React.Component {
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
  function mapStateToProps({ popup }) {
    const { isShownPopup, popupType, popupProps } = popup;
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
