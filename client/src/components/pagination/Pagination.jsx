import styles from "./Pagination.module.css";

export const Pagination = ({
  pageNumbers,
  nextHandle,
  prevHandle,
  paginationHandle,
  currentPage,
}) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.buttonPag} onClick={prevHandle}>
        Prev
      </button>
      {pageNumbers.slice(1).map((pageNumber) => (
        <button
          className={
            currentPage === pageNumber - 1
              ? styles.ButtonActive
              : styles.paginationButton
          }
          key={pageNumber}
          value={pageNumber}
          onClick={paginationHandle}
        >
          {pageNumber}
        </button>
      ))}
      <button className={styles.buttonPag} onClick={nextHandle}>
        Next
      </button>
    </div>
  );
};
