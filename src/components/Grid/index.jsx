import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

/**
 * Grid component
 * @param {Array} columnDefs - array of objects containing column information
 * @param {Array} data - grid data
 */
const Grid = ({ columnDefs, data }) => {
    return (
        <div className='rewards-grid'>
            <table>
                <thead>
                    <tr>
                        {
                            columnDefs.map((column,idx) => {
                                return (
                                    <th key={idx}>{column.name}</th>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((txn, rowIdx) => {
                            return (
                                <tr key={rowIdx}>
                                    {
                                        columnDefs.map((column, idx) => {
                                            const val = txn[column.key];
                                            const def = column.default;
                                            return (
                                                <td key={idx}>{val ? val : def}</td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

Grid.propTypes = {
    columnDefs: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object)
};

Grid.defaultProps = {
    data: []
};

export default Grid;