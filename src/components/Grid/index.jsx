import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

/**
 * Grid component
 * @param {id} id - grid id
 * @param {Array} columnDefs - array of objects containing column information
 * @param {Array} data - grid data
 */
const Grid = ({ id, columnDefs, data }) => {
    return (
        <div id={id} className='grid-layout'>
            <table>
                <thead>
                    <tr>
                        {
                            columnDefs.map((column,idx) => {
                                return (
                                    <th data-testid={`${column.key}-${idx}-th`} key={idx}>{column.name}</th>
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
                                                <td data-testid={`${column.key}-${rowIdx}-td`} key={idx}>{val ? val : def}</td>
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
    id: PropTypes.string,
    columnDefs: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object)
};

Grid.defaultProps = {
    id: '',
    data: []
};

export default Grid;