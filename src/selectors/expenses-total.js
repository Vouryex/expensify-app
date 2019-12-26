const sumReducer = (accumulator, currentValue) => {
  return accumulator + currentValue.amount;
};

export default expenses => {
  return expenses.reduce(sumReducer, 0);
};
