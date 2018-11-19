import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as SESSION_KEY from '@constants/SESSION_KEY'
import AutoLogin from '@components/__utils/AutoLogin'

const UserAuth = props => {
  const { Component, user } = props;
  const sessionUserId = window.sessionStorage.getItem(SESSION_KEY.USER_KEY);
  return (
    <Fragment>
      {
        user.authentication ? (
          <Component user={user} />
        ) : sessionUserId ? (
          <AutoLogin userId={sessionUserId} />
        ) : (
          <Redirect to="login" />
        )
      }
    </Fragment>
  )
};

export default connect(
  function mapStateProps({ user }) {
    return {
      user
    };
  }
)(UserAuth)
