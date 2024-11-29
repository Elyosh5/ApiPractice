import React, { useEffect, useState } from "react";
import scss from "./Favorite.module.scss";
import { useProduct } from "../../../context/ContextProduct";

const FavoritePage = () => {
  const { addToFavorite, readProduct, newData } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.FavoritePage}>
      <div className={scss.content}>
        <div className={scss.FavoritedProduct}>
          <img src={newData.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
