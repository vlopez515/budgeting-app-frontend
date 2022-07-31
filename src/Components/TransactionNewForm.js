import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  Button  from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";



const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then((res) => navigate(`/transactions`))
      .catch((error) => console.transaction(error));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  return (
    <div classitem_name="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Name</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount $</label>
        <input
          min="0" 
          oninput="validity.valid||(value='');"
          id="amount"
          type= "number"
          value={transaction.amount}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="date">Date</label>
        <input
         id="date"
         type="date"
          name="date"
          onChange={handleTextChange}
          value={transaction.date}
          required
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          required
        />
        <br />
        <Button style={{ backgroundColor: "#8D99AE" }} name="form" type="submit" value="Add Item">Add Item</Button>
      </form>
    </div>
  );
}

export default TransactionNewForm;
