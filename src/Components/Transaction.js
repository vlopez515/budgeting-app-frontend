import { Link } from "react-router-dom";

function Transaction({ transaction, id }) {
  return (
     <tr>
      <td>{transaction.date} </td>
      <td> <Link to={`/transactions/${id}`}> {transaction.item_name}</Link> </td>
      <td> {transaction.category === "Income" ? `$${transaction.amount}` : `-$${transaction.amount}`} </td>
    </tr>
  );
}

export default Transaction;
