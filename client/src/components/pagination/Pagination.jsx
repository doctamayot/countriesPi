export const Pagination = ({
  pageNumbers,
  nextHandle,
  prevHandle,
  paginationHandle,
  currentPage,
}) => {
  return (
    <div className="buttonGroup">
      <button className="buttonPag" onClick={prevHandle}>
        Prev
      </button>
      {pageNumbers.slice(1).map((pageNumber) => (
        <button
          className={
            currentPage === pageNumber - 1 ? "ButtonActive" : "paginationButton"
          }
          key={pageNumber}
          value={pageNumber}
          onClick={paginationHandle}
        >
          {pageNumber}
        </button>
      ))}
      <button className="buttonPag" onClick={nextHandle}>
        Next
      </button>
    </div>
  );
};
