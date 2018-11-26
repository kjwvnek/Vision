import React from 'react'
import { connect } from 'react-redux'
import { actionCreator as updateActionCreator } from '@actions/update'
import Icon from '@components/__utils/Icon'
import TextFieldSet from '@components/__common/Popup/UserInfo/TextFieldSet'
import FieldsFieldSet from '@components/__common/Popup/UserInfo/FieldsFieldSet'
import { Transition } from 'react-spring'
import { validateLength, validatePhoneNumber, validateEmail, validateField } from '@utils/validate';

const cx = require('classnames/bind').bind(require('./userInfo.scss'));

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    
    const {
      nickname,
      summary,
      phone,
      email,
      fields,
      description,
      userImageUrl
    } = props.user;

    this.state = {
      isAlert: false,
      isEditMode: false,
      nickname: nickname || '',
      summary: summary || '',
      phone: phone || '',
      email: email || '',
      fields: fields || [],
      description: description || '',
      userImageUrl: userImageUrl || ''
    };

    this.handleClickButtonEdit = this.handleClickButtonEdit.bind(this);
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.handleChangeFieldsField = this.handleChangeFieldsField.bind(this);
    this.handleClickButtonDeleteField = this.handleClickButtonDeleteField.bind(this);
  }

  handleClickButtonEdit() {
    const {
      isEditMode,
      nickname,
      summary,
      phone,
      email,
      fields,
      description
    } = this.state;
    
    const isValid = validateLength(nickname, 1, 12)
      && validateLength(summary, 0, 35)
      && validateLength(description, 0, 300)
      && validatePhoneNumber(phone)
      && validateEmail(email);
    
    if (isEditMode) {
      if (isValid) {
        this.props.dispatchUpdateUserInfo({
          id: this.props.user.id,
          nickname,
          email,
          phone,
          summary,
          description,
          fields
        });
        
        this.setState({
          ...this.state,
          isEditMode: false
        });
      } else {
        this.setState({
          ...this.state,
          isEditMode: false,
          isAlert: true
        });
  
        setTimeout(() => {
          this.setState({
            ...this.state,
            isAlert: false
          });
        }, 1500);
      }
    } else {
      this.setState({
        ...this.state,
        isEditMode: true
      });
    }
  }
  
  handleChangeTextField(e) {
    const textFieldEl = e.target;
    const nextState = { ...this.state };
    
    nextState[textFieldEl.name] = textFieldEl.value;
    
    this.setState(nextState);
  }
  
  handleChangeFieldsField(field) {
    let fields;
    
    if (!validateField(field)) {
      return;
    }
    
    if (this.state.fields.indexOf(field) === -1) {
      fields = this.state.fields.concat(field);
    } else {
      fields = this.state.fields.concat([]);
    }
    
    this.setState({
      ...this.state,
      fields
    });
  }
  
  handleClickButtonDeleteField(field) {
    const fields = this.state.fields.concat([]);
    fields.splice(fields.indexOf(field), 1);
    
    this.setState({
      ...this.state,
      fields
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
      isAlert
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
            <TextFieldSet
              name="nickname"
              className={cx('field-nickname')}
              isEditMode={isEditMode}
              placeholder="nickname"
              maxLength={12}
              value={nickname}
              onChange={this.handleChangeTextField}
            />
            <TextFieldSet
              name="summary"
              className={cx('field-summary')}
              isEditMode={isEditMode}
              defaultValue="summary."
              placeholder="within 35 characters"
              line={2}
              maxLength={35}
              value={summary}
              onChange={this.handleChangeTextField}
            />
          </div>
        </div>
        <TextFieldSet
          name="phone"
          className={cx('field-set')}
          isEditMode={isEditMode}
          label="Phone"
          labelIcon="icon-phone"
          defaultValue="phone number."
          placeholder="01012345678"
          value={phone}
          onChange={this.handleChangeTextField}
        />
        <TextFieldSet
          name="email"
          className={cx('field-set')}
          isEditMode={isEditMode}
          label="Email"
          labelIcon="icon-email"
          defaultValue="email address."
          placeholder="vision@gmail.com"
          value={email}
          onChange={this.handleChangeTextField}
        />
        <FieldsFieldSet
          className={cx('field-fields')}
          isEditMode={isEditMode}
          value={fields}
          onChange={this.handleChangeFieldsField}
          onClickButtonDelete={this.handleClickButtonDeleteField}
        />
        <TextFieldSet
          name="description"
          className={cx('field-set', 'field-description')}
          isEditMode={isEditMode}
          label="Introduction"
          defaultValue="who are you?"
          placeholder="within 300 characters"
          line={3}
          maxLength={300}
          value={description}
          onChange={this.handleChangeTextField}
        />
        <button
          type="button"
          className={cx('button-edit', { 'is-edit-mode': isEditMode })}
          onClick={this.handleClickButtonEdit}
        >
          <Icon
            name="icon-edit"
            width="44"
            height="44"
            className={cx('icon')}
          />
        </button>
        <Transition
          items={isAlert}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {isAlert => isAlert && (props => (
            <div className={cx('alert')} style={props}>
              <Icon
                name="icon-warning"
                width="80"
                height="80"
                className={cx('icon')}
              />
              <p className={cx('text')} role="alert">폼 형식이 올바르지 않습니다.<br/>확인해주세요.</p>
            </div>
          ))}
        </Transition>
      </div>
    );
  }
}

export default connect(
  null,
  function mapDispatchToProps(dispatch) {
    return {
      dispatchUpdateUserInfo(user) {
        dispatch(updateActionCreator.updateUserInfoRequest(user));
      }
    };
  }
)(UserInfo)
