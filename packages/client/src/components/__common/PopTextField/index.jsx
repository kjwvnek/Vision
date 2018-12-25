import React, { createRef } from 'react'
import Icon from '@/components/__utils/Icon'

const cx = require('classnames/bind').bind(require('./popTextField.scss'));

class Shadow extends React.Component {
  constructor(props) {
    super(props);

    this.containerRef = createRef();
    this.textRef = createRef();
  }

  componentDidUpdate() {
    const { isPopUp, popupValue } = this.props;

    if (isPopUp) {
      const popupEl = document.createElement('span');
      popupEl.className = cx('popup-value');
      popupEl.innerText = popupValue;

      const containerEl = this.containerRef.current;
      containerEl.appendChild(popupEl);
      popupEl.style.left = popupEl.offsetLeft + 'px';

      setTimeout(function() {
        containerEl.removeChild(popupEl);
      }, 1000);
    }
  }

  render() {
    const { positioner } = this.props;
    return (
      <span className={cx('shadow')} ref={this.containerRef}>
        <span className={cx('text')} ref={this.textRef}>{positioner}</span>
      </span>
    )
  }
}

class ShadedInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevValue: '',
      value: '',
      inputIndex: 0
    };

    this.textFieldRef = createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleChangeText } = this.props;

    this.setState({
      prevValue: this.state.value,
      value: e.target.value,
      inputIndex: this.textFieldRef.current.selectionStart
    });

    handleChangeText && handleChangeText(e.target.value);
  }

  render() {
    const { containerClassName, placeholder, toSearch } = this.props;
    const { value, prevValue, inputIndex } = this.state;
    const positioner = value.substring(0, inputIndex - 1);
    const popupValue = value.substring(inputIndex - 1, inputIndex);
    return (
      <div
        className={cx(
          'shaded-input',
          containerClassName ? containerClassName : null,
          toSearch ? 'to-search' : null
        )}
      >
        <div className={cx('text-field')}>
          <input
            type="text"
            className={cx('field')}
            onChange={this.handleChange}
            value={value}
            placeholder={placeholder}
            ref={this.textFieldRef}
          />
          <Shadow
            isPopUp={value.length > prevValue.length}
            positioner={positioner}
            popupValue={popupValue}
          />
        </div>
        {
          toSearch && (
            <button
              type="button"
              className={cx('button-search')}
            >
              <Icon
                name="icon-search"
                width={22}
                height={22}
                className={cx('icon')}
              />
            </button>
          )
        }
      </div>
    );
  }
}

export default ShadedInput
