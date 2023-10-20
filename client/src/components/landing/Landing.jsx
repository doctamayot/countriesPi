import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.principal}>
        <h1>Countries App</h1>
        <Link to="/homepage">
          <button className={styles.buttonPrincipal}>Entrar</button>
        </Link>
      </div>
    </div>
  );
};
