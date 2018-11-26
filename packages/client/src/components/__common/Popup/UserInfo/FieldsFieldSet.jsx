import React from 'react'
import Icon from '@components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./fieldsFieldSet.scss'));

class FieldsFieldSet extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isFieldEditMode: false,
      editedField: ''
    };
    
    this.handleClickButtonAddField = this.handleClickButtonAddField.bind(this);
    this.handleChangeFieldEditor = this.handleChangeFieldEditor.bind(this);
    this.handleKeyDownFieldEditor = this.handleKeyDownFieldEditor.bind(this);
    this.handleClickButtonDeleteField = this.handleClickButtonDeleteField.bind(this);
  }
  
  handleClickButtonAddField() {
    this.setState({
      ...this.state,
      isFieldEditMode: true
    });
  }
  
  handleChangeFieldEditor(e) {
    this.setState({
      ...this.state,
      editedField: e.target.value
    });
  }
  
  handleKeyDownFieldEditor(e) {
    const { onChange } = this.props;
    
    if (e.keyCode === 13) {
      onChange(e.target.value);
      
      this.setState({
        ...this.state,
        editedField: ''
      });
    }
  }
  
  handleClickButtonDeleteField(e) {
    const { onClickButtonDelete } = this.props;
    const field = e.currentTarget.previousElementSibling.innerText;
    
    onClickButtonDelete(field);
  }
  
  render() {
    const { isFieldEditMode, editedField } = this.state;
    const {
      isEditMode,
      className,
      value
    } = this.props;
    
    const fieldItems = (!isEditMode && value.length <= 0) ? (
      <li className={cx('item')} key="empty">
        <p className={cx('empty')}>작성된 전공이 없습니다.</p>
      </li>
    ) : isEditMode ? value.map((field, index) => (
      <li className={cx('item')} key={index}>
        <span className={cx('tag', 'can-delete')}>
          <span className={cx('text')}>{field}</span>
          <button
            type="button"
            className={cx('button-delete-field')}
            onClick={this.handleClickButtonDeleteField}
          >
            <Icon
              name="icon-x"
              width="10"
              height="10"
              className={cx('icon')}
            />
        </button>
        </span>
      </li>
    )) : value.map((field, index) => (
      <li className={cx('item')} key={index}>
        <span className={cx('tag')}>{field}</span>
      </li>
    ));
    
    const addFieldItem = !isEditMode ? null : isFieldEditMode ? (
      <li className={cx('item')} key="add">
        <div className={cx('area-add-field')}>
          <input
            type="text"
            className={cx('text-field')}
            value={editedField}
            placeholder="Field 추가"
            onChange={this.handleChangeFieldEditor}
            onKeyDown={this.handleKeyDownFieldEditor}
            maxLength={20}
          />
        </div>
      </li>
    ) : (
      <li className={cx('item')}>
        <div className={cx('area-add-field')}>
          <button
            type="button"
            className={cx('button')}
            onClick={this.handleClickButtonAddField}
          >
            Field 추가
          </button>
        </div>
      </li>
    );
  
    return (
      <div className={cx('field-set', className)}>
        <strong className={cx('label')}>
          <Icon
            name="icon-fields"
            width="20"
            height="20"
            className={cx('icon')}
          />
          <span className={cx('text')}>Fields</span>
        </strong>
        <div className={cx('field')}>
          <ul className={cx('fields-list')}>
            {fieldItems}
            {addFieldItem}
          </ul>
        </div>
      </div>
    );
  }
}

export default FieldsFieldSet
