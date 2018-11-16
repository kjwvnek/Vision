import React, {createRef} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreator as loginActionCreator } from '@actions/login'
import Icon from '@components/__utils/Icon'
import '@exec/bodymovin.min.exec'

const cx = require('classnames/bind').bind(require('./login.scss'));

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.worldAnimationContainerRef = createRef();
    this.onClickButtonLogin = this.onClickButtonLogin.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
  }
  
  componentDidMount() {
    const containerEl = this.worldAnimationContainerRef;
    
    window.bodymovin.loadAnimation({
      wrapper: containerEl.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/lotties/world.json'
    });
  }
  
  onClickButtonLogin() {
    const { loginWithGoogle } = this.props;
    
    loginWithGoogle()
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
        <div className={cx('world-animation-container')} ref={this.worldAnimationContainerRef} />
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
      loginWithGoogle() {
        dispatch(loginActionCreator.loginRequest());
      }
    };
  }
)(Login)
