import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
console.log(API);

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => navigate(`/404`));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.transaction(error));
  };

  return (
    <article>
      <h3>{transaction.item_name}</h3>
      <h5>{transaction.amount}</h5>
      <h5>{transaction.date}</h5>
      <h5>{transaction.from}</h5>
      <h5>{transaction.category}</h5>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;
