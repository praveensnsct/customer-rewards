import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

/**
 * Header component
 * @param {String} title - header title 
 */
const Header = ({ title }) => {
    return (
        <header className='app-header'>
            <h1> {title} </h1>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: ''
};

export default Header;