const CURRENCY_SYMBOLS = {
  ARS: '$ ',
  USD: 'U$S ',
};

export default function formatPrice({ currency, amount }) {
  const symbol = CURRENCY_SYMBOLS[currency] || '';
  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, '.');
  return `${symbol}${formattedAmount}`;
}
