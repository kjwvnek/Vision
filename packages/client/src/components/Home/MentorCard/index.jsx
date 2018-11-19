import React from 'react'
import Icon from '@components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./mentorCard.scss'));

const MentorCard = props => {
  return (
    <div className={cx('mentor-card')}>
      <a
        href='javascript:void(0)'
        className={cx('link')}
      >
        <div className={cx('header')}>
          <div className={cx('thumbnail')}>
            <Icon
              name="icon-default-man"
              width={50}
              height={50}
              className={cx('default')}
            />
          </div>
          <div className={cx('header-info')}>
            <strong className={cx('nickname')}>엔소사이어티</strong>
          </div>
        </div>
        <p className={cx('summary')}>일상을 익살스럽게 표현하는 일러스트 작가입니다^^ 일상을 익살스럽게 표현하는 일러스트 작가입니다^^</p>
        <ul className={cx('information')}>
          <li>
            <span className={cx('key')}>Phone</span>
            <span className={cx('value')}>010-0000-0000</span>
          </li>
          <li>
            <span className={cx('key')}>Email</span>
            <span className={cx('value')}>helloWorld@vision.com</span>
          </li>
          <li>
            <span className={cx('key')}>Field</span>
            <span className={cx('value')}>일러스트 작가</span>
          </li>
        </ul>
      </a>
    </div>
  )
};

export default MentorCard
