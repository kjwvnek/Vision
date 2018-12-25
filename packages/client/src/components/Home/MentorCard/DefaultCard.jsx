import React from 'react'
import Icon from '@/components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./mentorCard.scss'));

const DefaultCard = props => {
  return (
    <li className={cx('mentor-card', 'default-card')}>
      <Icon 
        name="icon-default-man"
        width="140"
        height="140"
        className={cx('default-icon')}
      />
    </li>
  )
};

export default DefaultCard
