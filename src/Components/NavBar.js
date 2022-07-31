import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#8D99AE" }}>
        <Container>
          <Link to="/transactions" style={{ textDecoration: "none", color: "red" }}>
            <h1>BUDGET BUDDY</h1>
          </Link>
          <Link to="/transactions/new" >
            <button style={{background: 'none', border:'none'}}>NEW TRANSACTION</button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
