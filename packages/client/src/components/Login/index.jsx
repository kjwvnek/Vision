import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreator as loginActionCreator } from '@/store/actions/login'
import Icon from '@/components/__utils/Icon'
import LottieAnimation from '@/components/__utils/LottieAnimation'

const cx = require('classnames/bind').bind(require('./login.scss'));

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.onClickButtonLogin = this.onClickButtonLogin.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
  }
  
  onClickButtonLogin() {
    const { dispatchLoginWithGoogle } = this.props;

    dispatchLoginWithGoogle()
  }
  
  goToNextStep() {
    const { user } = this.props;
    if (user.authentication) {
      return (
        <Redirect to="/" />
      );
    }
  }
  
  render() {
    return (
      <div className={cx('login')}>
        <h1 className={cx('app-title')}><strong className={cx('strong')}>V</strong>ision</h1>
        <LottieAnimation
          name="world"
          loop={true}
          containerClassName={cx('world-animation-container')}
        />
        <p className={cx('message')}>당신의 멘토, 당신의 멘티는 어디에 있을까요?</p>
        <button
          type="button"
          className={cx('button-login')}
          onClick={this.onClickButtonLogin}
        >
          <Icon
            name="icon-google-logo"
            width="50"
            height="50"
            className={cx('icon')}
          />
          <span className={cx('text')}>LOGIN WITH GOOGLE</span>
        </button>
        {this.goToNextStep()}
      </div>
    )
  }
}

export default connect(
  function mapStateToProps({ user }) {
    return {
      user
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatchLoginWithGoogle() {
        dispatch(loginActionCreator.loginRequest());
      }
    };
  }
)(Login)
