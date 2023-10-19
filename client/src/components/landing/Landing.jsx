import { Link } from "react-router-dom";
import "./Landing.css";

export const Landing = () => {
  return (
    <div className="landingPage">
      <div className="principal">
        <h1>Countries App</h1>
        <Link to="/homepage">
          <button className="buttonPrincipal">Entrar</button>
        </Link>
      </div>
    </div>
  );
};
