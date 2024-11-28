import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const contextProduct = createContext();
export const useProduct = () => useContext(contextProduct);

const ContextProduct = ({ children }) => {
  const [newData, setNewData] = useState("");
  const [data, setData] = useState([]);
  const API =
    "https://api.elchocrud.pro/api/v1/c50f25fc01ae9b083d764eb497ef5cbc/testt";

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  async function readProduct() {
    let { data } = await axios(API);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function addToFavorite(item) {
    await axios(API, item);
  }

  async function newProducts(id) {
    console.log(id);
  }

  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(data.length / itemPerPage);

  function handlePage() {
    let start = (page - 1) * itemPerPage;
    let end = start + itemPerPage;
    return data.slice(start, end);
  }

  const values = {
    addProduct,
    readProduct,
    data,
    handlePage,
    setPage,
    count,
    deleteProduct,
    newProducts,
    addToFavorite,
    newData,
  };
  return (
    <contextProduct.Provider value={values}>{children}</contextProduct.Provider>
  );
};

export default ContextProduct;
