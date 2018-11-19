import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreator as loginActionCreator } from '@actions/login'

class AutoLogin extends React.Component {
  componentDidMount() {
    const { userId, autoLogin } = this.props;
    autoLogin(userId);
  }

  render() {
    return (
      <Fragment />
    )
  }
}

export default connect(
  null,
  function mapDispatchToProps(dispatch) {
    return {
      autoLogin(userId) {
        dispatch(loginActionCreator.autoLoginRequest(userId));
      }
    };
  }
)(AutoLogin)
