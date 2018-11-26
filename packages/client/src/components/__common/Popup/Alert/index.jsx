import React from 'react'

const cx = require('classnames/bind').bind(require('./alert.scss'));

const Alert = props => {
  const { title, message, onClickBtnOk } = props;
  return (
    <div className={cx('alert')}>
      <strong className={cx('title')}>{title}</strong>
      <p className={cx('message')}>{message}</p>
      <div className={cx('buttons')}>
        <button
          type="button"
          className={cx('button-close')}
          onClick={onClickBtnOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert
