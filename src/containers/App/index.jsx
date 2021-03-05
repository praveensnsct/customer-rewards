import React, { useState, useEffect } from 'react';
import { forEach } from 'lodash';
import { DatePicker, Button, Grid, Header } from '../../components';
import { getTransactions } from './api';
import { monthMappings } from './constants';

import './index.scss';

const App = () => {
    const now = new Date();
    const [startDate, setStartDate] = useState(now.setMonth(now.getMonth() - 2));
    const [endDate, setEndDate] = useState(new Date()); 
    const [transactions, setTransactions] = useState([]);
    const [columnDefs, setColumnDefs] = useState([]);

    const onStartDateSelect = (date) => {
        setStartDate(date);
    };

    const onEndDateSelect = (date) => {
        setEndDate(date);
    };

    /**
     * get columns for grid based on user selected start and end date
     * @param {Number} startDate - in milliseconds
     * @param {Number} endDate - in milliseconds
     * @returns {Array} - array of objects containing column headers
     */
    const getCols = (startDate, endDate) => {
        const startDateMon = new Date(startDate).getMonth();
        const endDateMon = new Date(endDate).getMonth();
        const startDateYear = new Date(startDate).getFullYear();
        const endDateYear = new Date(endDate).getFullYear();

        const cols = [{
            name: 'Customer ID',
            key: 'customerId'
        }, {
            name: 'Customer Name',
            key: 'name'
        }];

        // Get columns for the grid based on start and end date. 
        for (let year = startDateYear; year <= endDateYear; year++) {
            const startMon = year === startDateYear ? startDateMon : 0;
            const endMon = year === endDateYear ? endDateMon : 11;
            for (let month = startMon; month <= endMon; month++) {
                cols.push({
                    name: `${monthMappings[month]}-${year}`,
                    key: `${monthMappings[month]}-${year}`,
                    default: 0,
                });
            }
        }

        cols.push({
          name: 'Total Rewards',
          key: 'total',
          default: 0,
        });

        return cols;
    }

    /**
     * Calculate rewards based on price/amount
     * @param {String} amount - transaction amount
     * @returns {Number} reward points
     */
    const calculateRewards = (amount) => {
        // 2 points for a $. If it is $1.5 then consider $1 because we dont want to give extra rewards
        amount = Math.floor(amount);
        if(amount > 100) {
            return ((amount - 100) * 2) + (1 * 50);
        } else if (amount > 50) {
            return amount - 50;
        } else {
            return 0;
        }
    };

    /**
     * Group user transactions by month and year
     * @param {Array} data - user transactions data
     * @returns {Array} - grouped transactions array 
     */
    const getTransactionsByMonth = (data) => {
        let groupedTxn = [];
        forEach(data, (user) => {
            let userObj = {
                customerId: user.customerId,
                name: `${user.firstName} ${user.lastName}`,
            };
            let totalCredits = 0;
            forEach(user.transactions, (txn) => {
                const month = new Date(txn.transactionDt).getMonth();
                const year = new Date(txn.transactionDt).getFullYear();
                const columnKey = `${monthMappings[month]}-${year}`;

                if(!userObj.hasOwnProperty(columnKey)) {
                    userObj[columnKey] = 0;
                }
                const rewards = calculateRewards(txn.transactionAmt);
                userObj[columnKey] += rewards;
                totalCredits += rewards;
                userObj.total = totalCredits;
            });
            groupedTxn.push(userObj);
        });
        return groupedTxn;
    };

    /**
     * Fetch user transactions
     */
    const fetchData = async () => {
        try {
            const data = await getTransactions(
                new Date(startDate).setHours(0,0,0),
                new Date(endDate).setHours(0,0,0)
            );
            const transformedResponse = getTransactionsByMonth(data);
            setColumnDefs(getCols(startDate, endDate));
            setTransactions(transformedResponse);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [startDate, endDate]);

    return (
        <div className='app-container'>
            <Header title="User Rewards"/>
            <p>NOTE: We have data from 11/01/2020 to 03/01/2021</p>
            <DatePicker 
                startDate={startDate}
                endDate={endDate}
                onStartDateSelect={onStartDateSelect}
                onEndDateSelect={onEndDateSelect}
            />
            <Button value='Refresh' onClick={fetchData} />
            <Grid id="CustomerRewardsGrid" columnDefs={columnDefs} data={transactions} />
        </div>
    );
};

export default App;