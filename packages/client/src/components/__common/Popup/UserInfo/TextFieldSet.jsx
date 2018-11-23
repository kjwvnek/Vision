import React, { Fragment } from 'react'
import Icon from '@components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./textFieldSet.scss'));

const TextFieldSet = props => {
  const {
    isEditMode,
    label,
    labelIcon,
    value,
    defaultValue,
    line,
    className
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
      <div className={cx('field')}>
        {
          isEditMode ? (
            <Fragment>
              {
                (line && line > 1) ? (
                  <textarea
                    className={cx('text-field')}
                    value={value}
                  />
                ) : (
                  <input
                    type="text"
                    className={cx('text-field')}
                    value={value}
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
