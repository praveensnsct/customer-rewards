const cloneDeep = require('lodash/cloneDeep');
const filter = require('lodash/filter');
const orderBy = require('lodash/orderBy');
const forEach = require('lodash/forEach');

const userTransactions = require('../stubs/transactions.json');

module.exports = (app) => {
    app.get('/users/transactions', (req, res) => {
        const transactions = cloneDeep(userTransactions);
        const { startDate, endDate } = req.query;

        forEach(transactions, (user) => {
            user.transactions = orderBy(
                filter(user.transactions, (transaction) => {
                    if(startDate && endDate)
                        return transaction.transactionDt >= startDate && transaction.transactionDt <= endDate;
                    else if(startDate)
                        return transaction.transactionDt >= startDate;
                    else if(endDate)
                        return transaction.transactionDt <= endDate;
                    else
                        return transaction;
                }), (filteredTxn) => {
                    return filteredTxn.transactionDt;
                }, 'transactionDt', 'asc');
        });

        res.json(transactions);
    });
}