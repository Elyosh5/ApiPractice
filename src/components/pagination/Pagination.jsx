import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ContextProduct";

export default function BasicPagination() {
  const { setPage, count } = useProduct();
  function handlePagination(p, n) {
    setPage(n);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <Pagination onChange={handlePagination} count={count} color="primary" />
    </div>
  );
}
