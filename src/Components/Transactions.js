import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import Table from "react-bootstrap/Table";


const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Transactions">
      <section>
        <h5>
          Bank Account Total: $ {""}
          {transactions.reduce(
            (total, transaction) =>
              transaction.category === "Income"
                ? total + Number(transaction.amount)
                : total - Number(transaction.amount),
            0
          )}
        </h5>
        <Table striped bordered hover variant="dark">
          <tbody>
            {transactions.map((transaction, id) => {
              return <Transaction key={id} transaction={transaction} id={id} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Transactions;
