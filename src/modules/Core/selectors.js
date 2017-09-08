// Context
export const getContext = (state) => {
  const context = state.core.context.context
  return context
}

export const getUsernames = (state) => {
  const context = getContext(state)
  const usernames = context.usernames
  return usernames
}

export const getIO = (state) => {
  const context = getContext(state)
  const io = context.io
  return io
}

// Account
export const getAccount = (state) => {
  const account = state.core.account
  return account
}

export const getUsername = (state) => {
  const account = getAccount(state)
  const username = account.username
  return username
}

export const getCurrencyConverter = (state) => {
  const account = getAccount(state)
  const currencyConverter = account.exchangeCache
  return currencyConverter
}

export const getExchangeRate = (state, fromCurrencyCode, toCurrencyCode) => {
  const currencyConverter = getCurrencyConverter(state)
  const exchangeRate = currencyConverter.convertCurrency(fromCurrencyCode, toCurrencyCode, 1)
  return exchangeRate
}

export const getFakeExchangeRate = (state, fromCurrencyCode, toCurrencyCode) => {
  const currencyConverter = getCurrencyConverter(state)
  const exchangeRate = currencyConverter.convertCurrency(fromCurrencyCode, toCurrencyCode, 1)
  return exchangeRate + (Math.random() * 10)
}

// Wallets
export const getWallets = (state) => {
  const wallets = state.core.wallets.byId
  return wallets
}

export const getWallet = (state, walletId) => {
  const wallets = getWallets(state)
  const wallet = wallets[walletId]
  return wallet
}

export const getBalanceInCrypto = (state, walletId, currencyCode) => {
  const wallet = getWallet(state, walletId)
  const balance = wallet.getBalance(currencyCode)
  return balance
}
