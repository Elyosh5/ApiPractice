import React, { useEffect } from "react";
import scss from "./ProductsPage.module.scss";
import { useProduct } from "../../../context/ContextProduct";
import BasicPagination from "../../pagination/Pagination";
import DeleteIcon from "@mui/icons-material/Delete";
const ProductsPage = () => {
  <button>Add to Busket</button>;
  const { data, readProduct, handlePage, deleteProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div className={scss.products}>
      <div className={scss.lines}>
        <div className={scss.line}></div>
        <h1>NEW IN ENSENT</h1>
        <div className={scss.line2}></div>
      </div>
      <div className={scss.main}>
        <div className={scss.content}>
          {handlePage().map((item) => (
            <div className={scss.product}>
              <img src={item.image} alt="image" />
              <h2>{item.name}</h2>
              <h3>{item.price}$</h3>
              <button onClick={() => deleteProduct(item._id)}>
                Delete
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
        <BasicPagination />
      </div>
    </div>
  );
};

export default ProductsPage;
