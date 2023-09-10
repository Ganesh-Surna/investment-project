const EachItem = ({ item }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return (
    <tr>
      <td>{item.year}</td>
      <td>{item.savingsEndOfYear}</td>
      <td>{item.yearlyInterest}</td>
      <td>{item.totalInterest}</td>
      <td>{item.investedCapital}</td>
    </tr>
  );
};
export default EachItem;
