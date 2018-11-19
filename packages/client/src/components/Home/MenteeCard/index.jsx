import React from 'react'
import Icon from '@components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./menteeCard.scss'));

const MenteeCard = props => {
  return (
    <div className={cx('mentee-card')}>
      <a
        href="javascript:void(0)"
        className={cx('link')}
      >
        <div className={cx('thumbnail')}>
          <Icon
            name="icon-default-woman"
            width={120}
            height={120}
            className={cx('default')}
          />
        </div>
        <div className={cx('information')}>
          <strong className={cx('nickname')}>엔소사이어티</strong>
          <span className={cx('email')}>helloWorld@vision.com</span>
        </div>
      </a>
    </div>
  )
};

export default MenteeCard
