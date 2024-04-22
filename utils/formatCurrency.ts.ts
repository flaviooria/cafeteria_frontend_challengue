const formatCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat("es-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
};

export { formatCurrency };
