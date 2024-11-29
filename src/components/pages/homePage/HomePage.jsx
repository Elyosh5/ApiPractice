import React, { useEffect } from "react";
import scss from "./HomePage.module.scss";
import { useProduct } from "../../../context/ContextProduct";
const HomePage = () => {
  const { data, readProduct, handlePage, deleteProduct } = useProduct();
  console.log(handlePage());
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.home}>
      <div className={scss.content}>
        <div className={scss.lines}>
          <div className={scss.line}></div>
          <h1>NEW IN ENSENT</h1>
          <div className={scss.line2}></div>
        </div>
        <div className={scss.newProducts}>
          {data.slice(-4).map((el) => (
            <div className={scss.newProduct}>
              <img src={el.image} alt="" />
              <h2>{el.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
