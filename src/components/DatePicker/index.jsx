import React from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { Button } from '../';

import './index.scss';
import "react-datepicker/dist/react-datepicker.css";

/**
 * DatePicker component
 * @param {Date} startDate - date object
 * @param {Date} endDate - date object
 * @param {Function} onStartDateSelect - callback function for start date selection
 * @param {Function} onEndDateSelect - callback function for end date selection
 */
const DatePicker = ({ startDate, endDate, onStartDateSelect, onEndDateSelect }) => {
    return (
        <div className='date-picker'>
            <div>
                Start Date:   
                <ReactDatePicker
                    selected={startDate}
                    onChange={date => onStartDateSelect(date)}
                    customInput={<Button />}
                    selectsStart
                    maxDate={endDate}
                />
            </div>
            <div>
                End Date:    
                <ReactDatePicker
                    selected={endDate}
                    onChange={date => onEndDateSelect(date)}
                    customInput={<Button />}
                    selectsEnd
                    minDate={startDate}
                    maxDate={new Date()}
                />
            </div>
        </div>
    );
};

DatePicker.propTypes = {
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    onStartDateSelect: PropTypes.func,
    onEndDateSelect: PropTypes.func
};

DatePicker.defaultProps = {
    startDate: new Date(),
    endDate: new Date(),
    onStartDateSelect: () => {},
    onEndDateSelect: () => {}
};

export default DatePicker;