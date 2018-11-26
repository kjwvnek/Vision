import React from 'react'
import { connect } from 'react-redux'
import { actionCreator as popupActionCreator } from '@actions/popup'
import * as POPUP_TYPE from '@constants/POPUP_TYPE'
import Flicking from '@egjs/react-flicking'
import Icon from '@components/__utils/Icon'
import PopTextField from '@components/__common/PopTextField'
import MentorCard from '@components/Home/MentorCard'
import MenteeCard from '@components/Home/MenteeCard'

const cx = require('classnames/bind').bind(require('./home.scss'));

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickButtonUserInfo = this.handleClickButtonUserInfo.bind(this);
  }

  handleClickButtonUserInfo() {
    const { user, dispatchShowUserInfoPopup } = this.props;
    dispatchShowUserInfoPopup(user.id);
  }

  render() {
    return (
      <div className={cx('home')}>
        <h1 className={cx('app-title')}><strong className={cx('strong')}>V</strong>ision</h1>
        <button
          type="button"
          className={cx('button-user-info')}
          onClick={this.handleClickButtonUserInfo}
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
            <h2 className={cx('search-title')}>Search Your Mentor Candidates!</h2>
            <PopTextField
              containerClassName={cx('search-input')}
              placeholder="Mentor's Nickname, Phone, Email, Field"
              toSearch={true}
            />
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
  }
}

export default connect(
  function mapStateToProps({ user }) {
    return { user };
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatchShowUserInfoPopup(userId) {
        dispatch(popupActionCreator.requestUserInfoPopup(userId));
      }
    };
  }
)(Home)
