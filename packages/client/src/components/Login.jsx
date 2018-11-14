import React from 'react'
import { connect } from 'react-redux'
import { googleAuth } from 'Services/firebase'
import * as ACTIONS from 'Constants/ACTIONS'

const Login = ({ user, loginWithGoogle }) => {
  const { fetching } = user;
  return (
    <div className="login">
      <p className="comment">
        구글 계정을 이용해서 본 서비스를 이용하실 수 있습니다.
      </p>
      <button
        type="button"
        className="btn-login"
        onClick={() => {
          loginWithGoogle();
        }}
      >
        LOGIN WITH GOOGLE
      </button>
      {
        fetching && (
          <p>계정 정보를 확인중입니다...</p>
        )
      }
    </div>
  );
};

export default connect(
  ({ user }) => ({
    user
  }),
  dispatch => ({
    loginWithGoogle() {
      googleAuth().then(({ user }) => {
        dispatch({
          type: ACTIONS.LOGIN_REQUEST,
          description: {
            email: user.email
          }
        })
      });
    }
  })
)(Login)
