export const formatCurrency = (number, sd = 0) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: sd,
    maximumFractionDigits: sd,
  }).format(number)

export const formatCurrencyEvents = number =>
  Math.round((+number || 0) * 0.5 * 100) / 100
