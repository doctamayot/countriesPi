import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({ name, img, continent, id }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.principalCard}>
        <h3 style={{ fontSize: "15px" }}>{name}</h3>
        <img src={img} alt={name} className={styles.imgFlag} />
        <h5>{continent}</h5>
      </div>
    </Link>
  );
};
