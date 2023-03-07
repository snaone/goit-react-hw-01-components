import css from '../TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({items}) {
    return (
        <table className={css.transactionHistory}>
        <thead className={css.transactionHeader}>
            <tr className={css.transactionValue}>
            <th className={css.rowHeader}>Type</th>
            <th className={css.rowHeader}>Amount</th>
            <th className={css.rowHeader}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => 
                <tr key={item.id} className={css.transactionValue}>
                <td className={css.transactionDataValue}>{item.type}</td>
                <td className={css.transactionDataValue}>{item.amount}</td>
                <td className={css.transactionDataValue}>{item.currency}</td>
                </tr>     
            )}
        </tbody>
        </table>
    );
};

TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };