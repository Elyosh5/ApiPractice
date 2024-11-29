import React, { useEffect } from "react";
import scss from "./ProductsPage.module.scss";
import { useProduct } from "../../../context/ContextProduct";
import BasicPagination from "../../pagination/Pagination";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductsPage = () => {
  <button>Add to Basket</button>;
  const { data, readProduct, handlePage, deleteProduct, addToFavorite } =
    useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.products}>
      <div className={scss.main}>
        <div className={scss.content}>
          {handlePage().map((item) => (
            <div className={scss.product}>
              <img src={item.image} alt="image" />
              <h2>{item.name}</h2>
              <h3>{item.price}$</h3>
              <FavoriteBorderOutlinedIcon
                onClick={() => addToFavorite(item)}
                className={scss.favorite}
              />
              <DeleteOutlineIcon
                onClick={() => deleteProduct(item._id)}
                className={scss.delete}
              />
            </div>
          ))}
        </div>
        <BasicPagination />
      </div>
    </div>
  );
};

export default ProductsPage;
