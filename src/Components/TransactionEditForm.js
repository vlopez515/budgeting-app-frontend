import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.Transaction(error));
  }, [id]);

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${id}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${id}`);
      })
      .catch((error) => console.transaction(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div classitem_name="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainsName">Name</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain Name"
        />
        <label htmlFor="amount">Amount</label>
        <input
          min="0" 
          oninput="validity.valid||(value='');"
          id="amount"
          type="number"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleTextChange}
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
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
        />
        <br />
        <input name="form" type="submit" value="Edit Item" />
        <a>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </a>
      </form>
    </div>
  );
}

export default TransactionEditForm;
