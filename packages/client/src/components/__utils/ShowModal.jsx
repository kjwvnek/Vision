import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreator as popupActionCreator } from '@actions/popup'

const ShowModal = props => {
  const { children, showPopup } = props;
  
  showPopup(() => (
    {children}
  ));
  
  return (
    <Fragment />
  );
};

export default connect(
  null,
  function mapDispatchToProps(dispatch) {
    return {
      showModal(renderChildren) {
        dispatch(popupActionCreator.showModal(renderChildren))
      }
    }
  }
)(ShowModal)
