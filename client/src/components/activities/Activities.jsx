import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity, getActivities } from "../../redux/actions";

import { Link } from "react-router-dom";

import styles from "./Activities.module.css";

export const Activities = () => {
  const [first, setFirst] = useState([]);
  const activities = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    const confirmed = window.confirm(
      `¿Estás seguro de que deseas eliminar la actividad "${e.target.value}"?`
    );
    if (confirmed) {
      dispatch(deleteActivity(e.target.value));
      dispatch(getActivities());
    }
  };
  useEffect(() => {
    dispatch(getActivities());
    setFirst(activities);
  }, [first]);

  return (
    <>
      <div className={styles.principal}>
        <h2>List of Activities</h2>
        {activities.map((act, index) => (
          <div className={styles.activity} key={index}>
            {act.name}
            <button
              className={styles.button}
              value={act.name}
              onClick={handleDelete}
            >
              X
            </button>
          </div>
        ))}
        <Link to="/homepage">
          <div className={styles.backLink}>Back</div>
        </Link>
      </div>
    </>
  );
};
