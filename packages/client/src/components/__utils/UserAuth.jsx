import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const UserAuth = props => {
  const { Component, user } = props;
  return (
    <Component />
  )
};

export default connect(
  function mapStateProps({ user }) {
    return {
      user
    };
  }
)(UserAuth)
