import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, description, unitPrice, image, name, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        unitPrice: unitPrice,
        quantity: quantity,
        description: description,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p className="product__name">
          <strong>{name}</strong>
        </p>
        <p className="product__description">Info : {description}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{unitPrice}</strong>
        </p>
        <div className="product__quantity">
          <small>(In Stock) </small>
          <strong>{quantity}</strong>
        </div>
      </div>

      <button onClick={addToBasket} className="product__button">
        Add to Basket
      </button>
    </div>
  );
}
export default Product;
