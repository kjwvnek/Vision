import React from 'react'
import Icon from '@components/__utils/Icon'
import TextFieldSet from '@components/__common/Popup/UserInfo/TextFieldSet'

const cx = require('classnames/bind').bind(require('./userInfo.scss'));

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: props.nickname,
      summary: props.summary,
      phone: props.phone,
      email: props.email,
      fields: props.fields,
      description: props.description,
      userImageUrl: props.userImageUrl,
      isEditMode: false
    };

    this.handleClickButtonEdit = this.handleClickButtonEdit.bind(this);
    this.handleClickButtonSubmit = this.handleClickButtonSubmit.bind(this);
  }

  handleClickButtonEdit() {
    this.setState({
      ...this.state,
      isEditMode: !this.state.isEditMode
    });
  }

  handleClickButtonSubmit() {
    this.setState({
      ...this.state,
      isEditMode: false
    });
  }

  render() {
    const {
      nickname,
      summary,
      phone,
      email,
      fields,
      description,
      userImageUrl,
      isEditMode,
    } = this.state;

    return (
      <div className={cx('user-info')}>
        <div className={cx('header')}>
          <div className={cx('image-frame', userImageUrl ? '' : 'default')}>
            {
              userImageUrl ? (
                <img
                  src={userImageUrl}
                  alt=""
                  width="110"
                  height="110"
                />
              ) : (
                <Icon
                  name="icon-default-man"
                  width="95"
                  height="95"
                  className={cx('icon-default')}
                />
              )
            }
          </div>
          <div className={cx('info')}>
            <strong className={cx('nickname')}>{nickname}</strong>
            <TextFieldSet
              className={cx('field-summary')}
              isEditMode={isEditMode}
              value={summary}
              defaultValue="summary."
              line={2}
            />
          </div>
        </div>
        <TextFieldSet
          className={cx('field-set')}
          isEditMode={isEditMode}
          label="Phone"
          labelIcon="icon-phone"
          value={phone}
          defaultValue="phone number."
        />
        <TextFieldSet
          className={cx('field-set')}
          isEditMode={isEditMode}
          label="Email"
          labelIcon="icon-email"
          value={email}
          defaultValue="email address."
        />
        <TextFieldSet
          className={cx('field-set')}
          isEditMode={isEditMode}
          label="Introduction"
          value={description}
          defaultValue="who are you?"
        />
        <button
          type="button"
          className={cx('button-edit')}
          onClick={this.handleClickButtonEdit}
        >
          <Icon
            name="icon-edit"
            width="44"
            height="44"
            className={cx('icon')}
          />
        </button>
      </div>
    );
  }
}

export default UserInfo
