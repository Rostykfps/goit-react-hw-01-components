import PropTypes from 'prop-types';
import {
  TableHead,
  TableHeadRow,
  TableRow,
  TableTransactionHistory,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransactionHistory>
      <TableHead>
        <TableHeadRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeadRow>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
        ))}
      </tbody>
    </TableTransactionHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
