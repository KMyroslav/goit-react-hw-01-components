import propTypes from "prop-types";
import styles from "./Transaction.module.css";

const Transactions = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tHead}>
        <tr className={styles.tHeadRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tBody}>
        {items
          .sort((a, b) => a.type.localeCompare(b.type))
          .map((el) => {
            const { id, type, amount, currency } = el;
            return (
              <tr key={id} className={styles.tBodyRow}>
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
