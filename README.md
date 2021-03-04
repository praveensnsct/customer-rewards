# Rewards Application

## Table of Contents
- [Understanding](#understanding)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Package Scripts](#package-scripts)

## Understanding
  - A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1   point for every dollar spent over $50 in each transaction

    (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

  - Given a record of every transaction during a three month period, calculate the reward       points earned for each customer per month and total.

  - User transactions data is stored in `/src/server/stubs/transactions.json`
  - Transaction date is stored/retrieved in milliseconds
  - We have data from Nov 1 2020 to Mar 1 2020. Provide start date and end date within this range to see data.
  - Since it is a 3 months period transaction, we do not know if it is on the same year or if it always the start and end of the month. So we have grouped based on year and month.
  - Points are calculated based on the start date and end date. If the start date is Apr 15 2020, points for that month is calculated from 15th and not 1st. If we need it from 1st then give the start date as Apr 1st 2020. Same with end date.
  - We can extend this based on timezone in future.

## Prerequisites
Install the following before you start:
- Node.js >= 12.16
  - Mac / Linux users with nvm: `$ nvm install 12`
    - nvm is highly recommended
  - Install directly from Node: https://nodejs.org/en/
- Yarn
  - Follow instructions here: https://yarnpkg.com/en/

## Getting Started
1. Clone project from git repository
    - `$ git clone https://github.com/praveensnsct/react-rewards.git`
2.  Change to project directory
    - `$ cd react-rewards`
3. Install dependencies
    - `$ yarn`
4.  Start development server
    - `$ yarn start`

## Package Scripts
| Script               | Description                                               |
|----------------------|-----------------------------------------------------------|
| `yarn start`         | Start development application server

