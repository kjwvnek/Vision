import React, { Fragment } from 'react'
import Icon from '@components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./textFieldSet.scss'));

const TextFieldSet = props => {
  const {
    name,
    isEditMode,
    label,
    labelIcon,
    defaultValue,
    placeholder,
    line,
    className,
    maxLength,
    onChange,
    value
  } = props;
  
  return (
    <div className={cx('field-set', className)}>
      {
        label && (
          <strong className={cx('label')}>
            {
              labelIcon && (
                <Icon
                  name={labelIcon}
                  width="20"
                  height="20"
                  className={cx('icon')}
                />
              )
            }
            <span className={cx('text')}>{label}</span>
          </strong>
        )
      }
      <div className={cx('field', { 'is-multi-line': line && line > 1 })}>
        {
          isEditMode ? (
            <Fragment>
              {
                (line && line > 1) ? (
                  <textarea
                    name={name}
                    className={cx('text-field')}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                  />
                ) : (
                  <input
                    type="text"
                    name={name}
                    className={cx('text-field')}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                  />
                )
              }
            </Fragment>
          ) : value ? (
            <p className={cx('value')}>{value}</p>
          ) : (
            <p className={cx('value', 'default')}>{defaultValue}</p>
          )
        }
      </div>
    </div>
  );
};

export default TextFieldSet
