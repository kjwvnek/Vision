import React from 'react'
import DefaultCard from '@/components/Home/MentorCard/DefaultCard'
import Icon from '@/components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./mentorCard.scss'));

const MentorCard = props => {
  const { id, userImageUrl, nickname, summary, fields } = props;
  return !id ? <DefaultCard /> : (
    <li className={cx('mentor-card')}>
      <a
        href='javascript:void(0)'
        className={cx('link')}
      >
        <div className={cx('header')}>
          <div className={cx('thumbnail')}>
            {
              userImageUrl ? (
                <img 
                  src={userImageUrl}
                  alt="Profile"
                  className={cx('image')}
                />
              ) : (
                <Icon
                  name="icon-default-man"
                  width={50}
                  height={50}
                  className={cx('default')}
                />
              )
            }
          </div>
          <div className={cx('header-info')}>
            <strong className={cx('nickname')}>{nickname}</strong>
          </div>
        </div>
        <p className={cx('summary')}>{summary}</p>
        <ul className={cx('fields')}>
          {fields.map(field => (
            <li className={cx('item')}>{field}</li>
          ))}
        </ul>
      </a>
    </li>
  )
};

export default MentorCard
