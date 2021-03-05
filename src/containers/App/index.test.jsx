import React from 'react';
import mockAxios from 'axios';
import { render, cleanup, waitFor } from '@testing-library/react';

import App from '.';

describe('Test Customer rewards <App />', () => {

    afterEach(cleanup);

  test('it exists', () => {
      expect(App).toBeDefined();
    });

    test('it renders with right data - test 1', async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.resolve([
        {
            "customerId": 1,
            "firstName": "Customer",
            "lastName": "1",
            "transactions": [
                {
                    "transactionId": 2,
                    "transactionAmt": 120,
                    "currency": "$",
                    "transactionDt": 1612159200000
                },
                {
                    "transactionId": 3,
                    "transactionAmt": 150,
                    "currency": "$",
                    "transactionDt": 1614578400000
                },
                {
                    "transactionId": 4,
                    "transactionAmt": 20,
                    "currency": "$",
                    "transactionDt": 1614924000000
                }
            ]   
        }
      ]));

      const { getByTestId } = render(
        <App />
      );

      const janRewards = await waitFor(() => getByTestId('Jan-2021-0-td'));
      const febRewards = await waitFor(() => getByTestId('Feb-2021-0-td'));
      const marRewards = await waitFor(() => getByTestId('Mar-2021-0-td'));
      const totalRewards = await waitFor(() => getByTestId('total-0-td'));

      expect(Number(janRewards.textContent)).toBe(0);
      expect(Number(febRewards.textContent)).toBe(90);
      expect(Number(marRewards.textContent)).toBe(150);
      expect(Number(totalRewards.textContent)).toBe(240);
    });

    test('it renders with right data - test 2', async () => {
        mockAxios.get.mockImplementationOnce(() => Promise.resolve([
          {
              "customerId": 1,
              "firstName": "Customer",
              "lastName": "1",
              "transactions": [
                  {
                      "transactionId": 2,
                      "transactionAmt": 120,
                      "currency": "$",
                      "transactionDt": 1612159200000
                  },
                  {
                      "transactionId": 3,
                      "transactionAmt": 150,
                      "currency": "$",
                      "transactionDt": 1614578400000
                  },
                  {
                      "transactionId": 4,
                      "transactionAmt": 200,
                      "currency": "$",
                      "transactionDt": 1614924000000
                  }
              ]   
          }
        ]));
  
        const { getByTestId } = render(
          <App />
        );
  
        const janRewards = await waitFor(() => getByTestId('Jan-2021-0-td'));
        const febRewards = await waitFor(() => getByTestId('Feb-2021-0-td'));
        const marRewards = await waitFor(() => getByTestId('Mar-2021-0-td'));
        const totalRewards = await waitFor(() => getByTestId('total-0-td'));
  
        expect(Number(janRewards.textContent)).toBe(0);
        expect(Number(febRewards.textContent)).toBe(90);
        expect(Number(marRewards.textContent)).toBe(400);
        expect(Number(totalRewards.textContent)).toBe(490);
      });

      test('it renders with right data - test 3', async () => {
        mockAxios.get.mockImplementationOnce(() => Promise.resolve([
          {
              "customerId": 1,
              "firstName": "Customer",
              "lastName": "1",
              "transactions": [
                  {
                      "transactionId": 2,
                      "transactionAmt": 51,
                      "currency": "$",
                      "transactionDt": 1612159200000
                  },
                  {
                      "transactionId": 3,
                      "transactionAmt": 45,
                      "currency": "$",
                      "transactionDt": 1614578400000
                  },
                  {
                      "transactionId": 4,
                      "transactionAmt": 10,
                      "currency": "$",
                      "transactionDt": 1614924000000
                  }
              ]   
          }
        ]));
  
        const { getByTestId } = render(
          <App />
        );
  
        const janRewards = await waitFor(() => getByTestId('Jan-2021-0-td'));
        const febRewards = await waitFor(() => getByTestId('Feb-2021-0-td'));
        const marRewards = await waitFor(() => getByTestId('Mar-2021-0-td'));
        const totalRewards = await waitFor(() => getByTestId('total-0-td'));
  
        expect(Number(janRewards.textContent)).toBe(0);
        expect(Number(febRewards.textContent)).toBe(1);
        expect(Number(marRewards.textContent)).toBe(0);
        expect(Number(totalRewards.textContent)).toBe(1);
      });

      test('it renders with right data - test 4', async () => {
        mockAxios.get.mockImplementationOnce(() => Promise.resolve([
          {
              "customerId": 1,
              "firstName": "Customer",
              "lastName": "1",
              "transactions": [
                  {
                      "transactionId": 2,
                      "transactionAmt": 45,
                      "currency": "$",
                      "transactionDt": 1612159200000
                  },
                  {
                      "transactionId": 3,
                      "transactionAmt": 33,
                      "currency": "$",
                      "transactionDt": 1614578400000
                  },
                  {
                      "transactionId": 4,
                      "transactionAmt": 6,
                      "currency": "$",
                      "transactionDt": 1614924000000
                  }
              ]   
          }
        ]));
  
        const { getByTestId } = render(
          <App />
        );
  
        const janRewards = await waitFor(() => getByTestId('Jan-2021-0-td'));
        const febRewards = await waitFor(() => getByTestId('Feb-2021-0-td'));
        const marRewards = await waitFor(() => getByTestId('Mar-2021-0-td'));
        const totalRewards = await waitFor(() => getByTestId('total-0-td'));
  
        expect(Number(janRewards.textContent)).toBe(0);
        expect(Number(febRewards.textContent)).toBe(0);
        expect(Number(marRewards.textContent)).toBe(0);
        expect(Number(totalRewards.textContent)).toBe(0);
      });
});
