import React, { useContext, useState } from "react";
import scss from "./AdminPage.module.scss";
import { useProduct } from "../../../context/ContextProduct";
const AdminPage = () => {
  const { addProduct } = useProduct();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  console.log(image);

  function handleSend() {
    let newProduct = {
      image: image,
      name: name,
    };
    addProduct(newProduct);
    setImage("");
    setName("");
    setPrice("");
  }
  return (
    <div>
      <div className={scss.admin}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.inputs}>
              <h1>Add New Product</h1>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Products's Image"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Product's Name"  
              />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Product's Price"
              />

              <button onClick={handleSend}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
