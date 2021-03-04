import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

/**
 * Button component
 * @param {String} value - Text to display
 * @param {Function} onClick - callback function
 */
const Button = ({ value, onClick }) => {
    return (
        <button className="date-picker-button date-picker-button__custom" onClick={onClick}>
          {value}
        </button>
    );
};

Button.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    value: '',
    onClick: () => {}
};

export default Button;