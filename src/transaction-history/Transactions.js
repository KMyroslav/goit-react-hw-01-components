import propTypes from "prop-types";

const Transactions = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => {
          const { id, type, amount, currency } = el;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Transactions;
