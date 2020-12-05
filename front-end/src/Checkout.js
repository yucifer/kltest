import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Tablets/Work_From_Home_Tablets_Creative_1500x200.jpg"
          alt="advertisement"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              unitPrice={item.unitPrice}
              name={item.name}
              description={item.description}
            />
          ))}

          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
