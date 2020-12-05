import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  const emptyBasket = () => {
    if (basket.length === 0) {
      return alert("Please add items in the cart first");
    }
    const totalPrice = getBasketTotal(basket);
    const order = basket.map((product) => {
      return {
        name: product.name,
        unitPrice: product.unitPrice,
        totalQuantity: 1,
      };
    });

    //dispatch item into the data layer
    fetch("http://localhost:5000/orders", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order: order,
        totalPrice: totalPrice,
      }),
    })
      .then((response) => a())
      .catch((err) => console.log(err));

    // dispatch({
    //   type: "EMPTY_BASKET",
    // });
    // history.push("/orderplaced");
  };

  const a = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    history.push("/orderplaced");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />

      <button onClick={emptyBasket}>Place Order</button>
    </div>
  );
}

export default Subtotal;

// (e) => history.push("/orderplaced")
