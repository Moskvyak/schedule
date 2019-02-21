import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { DebounceInput } from 'react-debounce-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSearch,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

import { uiConfig } from '../../utils/config';
import './SearchForm.css';

export class SearchForm extends PureComponent {
  getLeftIcon = () => {
    const { loading } = this.props;
    return loading
      ? <FontAwesomeIcon
          className="searchform__left-icon"
          icon={faSpinner}
          color={uiConfig.primaryColor}
          spin
          size="2x"
        />
      : <FontAwesomeIcon
          className="searchform__left-icon"
          icon={faSearch}
          color={uiConfig.enabledColor}
          size="2x"
        />;
  };

  getRightIcon = () => {
    const { value, clearSearch } = this.props;
    const color = value.length ? uiConfig.enabledColor : uiConfig.disabledColor;
    return (
      <FontAwesomeIcon
        className="searchform__right-icon"
        icon={faTimes}
        color={color}
        onClick={clearSearch}
        size="2x"
      />
    );
  };
  render() {
    const { value, onChange, title, placeholder, error } = this.props;
    return (
      <div className="searchform__wrapper">
        {title &&
          <h3>
            {title}
          </h3>}
        <DebounceInput
          value={value}
          onChange={onChange}
          debounceTimeout={300}
          placeholder={placeholder}
        />
        {this.getLeftIcon()}
        {this.getRightIcon()}
        {error &&
          <div className="searchform__error-message">
            {error}
          </div>}
      </div>
    );
  }
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
};
