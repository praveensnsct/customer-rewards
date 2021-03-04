import axios from '../../../utils/api';

const getTransactions = (startDate, endDate) => axios.get({
  url: `/users/transactions`,
  params: {
      startDate,
      endDate,
  }
});

export {
    getTransactions,
}