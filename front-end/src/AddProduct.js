import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FileBase64 from "react-file-base64";
import "./AddProduct.css";

function AddProduct() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    console.log(image);
    fetch("http://localhost:5000/products", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        unitPrice: Number(unitPrice),
        image: String(image),
        quantity: Number(quantity),
        description: description,
      }),
    })
      .then((response) => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div classname="addProduct">
      <Link to="/">
        <img
          className="addProduct__logo"
          src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
          alt="logo"
        />
      </Link>
      <div className="addProduct__container">
        <h1>Enter Product Details</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Description</h5>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h5>Price</h5>
          <input
            type="text"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
          <h5>Quantity</h5>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <h5>Image</h5>
          <FileBase64 multiple={true} onDone={(e) => setImage(e[0].base64)} />
          <button
            className="addProduct__signInButton"
            type="submit"
            onClick={sendData}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
