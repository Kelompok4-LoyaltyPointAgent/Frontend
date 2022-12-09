import React from "react";
import Page from "@mui/material/Pagination";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const handleChange = (event, value) => {
    paginate(value);
  };
  const page = Math.ceil(totalPosts / postsPerPage);
  return (
    <nav>
      <ul className="pagination">
        <Page
          count={page}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </ul>
    </nav>
  );
};

export default Pagination;
