import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, name, description, unitPrice }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__description">{description}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{unitPrice}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
