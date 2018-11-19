import React from 'react'
import Flicking from '@egjs/react-flicking'
import Icon from '@components/__utils/Icon'
import MentorCard from './MentorCard'
import MenteeCard from './MenteeCard'

const cx = require('classnames/bind').bind(require('./home.scss'));

const Home = props => {
  return (
    <div className={cx('home')}>
      <h1 className={cx('app-title')}><strong className={cx('strong')}>V</strong>ision</h1>
      <button
        type="button"
        className={cx('button-user-info')}
      >
        <Icon
          name="icon-man"
          className={cx('icon')}
          width={50}
          height={50}
        />
        <span className={cx('text')}>Your Info.</span>
      </button>
      <div className={cx('container')}>
        <div className={cx('area-search')}>

        </div>
        <div className={cx('area-section')}>
          <div className={cx('section')}>
            <h2 className={cx('section-title')}>
              <span className={cx('text')}>Your Mentors</span>
            </h2>
            <Flicking
              tag="ul"
              previewPadding={[345, 345]}
              prefix={'flick-mentor'}
              circular={true}
              defaultIndex={0}
              zIndex={1}
              useTranslate={true}
              className={cx('flick-wrap')}
            >
              <div className={cx('flick-panel')}>
                <MentorCard />
              </div>
            </Flicking>
          </div>
          <div className={cx('section')}>
            <h2 className={cx('section-title')}>
              <span className={cx('text')}>Your Mentees</span>
            </h2>
            <Flicking
              tag="ul"
              previewPadding={[345, 345]}
              prefix={'flick-mentee'}
              circular={true}
              defaultIndex={0}
              zIndex={1}
              useTranslate={true}
              className={cx('flick-wrap')}
            >
              <div className={cx('flick-panel')}>
                <MenteeCard />
              </div>
            </Flicking>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
