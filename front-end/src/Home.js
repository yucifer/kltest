import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [product]);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604__340.jpg"
          alt="homepage image"
        />
      </div>

      {!product.length ? (
        <h1> Loading Products...... </h1>
      ) : (
        <div className="home__row">
          {product.map((prod) => (
            <Product
              key={prod._id}
              id={prod._id}
              description={prod.description}
              name={prod.name}
              unitPrice={prod.unitPrice}
              image={prod.image}
              quantity={prod.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
