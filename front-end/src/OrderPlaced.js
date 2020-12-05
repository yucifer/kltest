import React from "react";
import { useStateValue } from "./StateProvider";

function OrderPlaced() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <h1>Thank you for Placing the order</h1>
    </div>
  );
}

export default OrderPlaced;
