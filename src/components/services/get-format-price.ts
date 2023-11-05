export const getFormatPrice = (price: number): string => {
  const options = {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  };
  const formatPrice = new Intl.NumberFormat('ru-RU', options).format(price);

  return formatPrice;
};
