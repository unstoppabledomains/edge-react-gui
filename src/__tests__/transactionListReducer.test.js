/* eslint-disable flowtype/require-valid-file-annotation */

/* globals test expect */

import { transactionList as transactionListReducer } from '../reducers/scenes/TransactionListReducer.js'

test('initialState', () => {
  const expected = {
    transactions: [],
    transactionIdMap: {},
    currentCurrencyCode: '',
    currentEndIndex: 0,
    numTransactions: 0,
    currentWalletId: ''
  }
  const actual = transactionListReducer(undefined, {})

  expect(actual).toEqual(expected)
})
