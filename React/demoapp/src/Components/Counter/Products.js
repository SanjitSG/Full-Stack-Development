import { useState } from "react";
import data from "./data";

let addToCart = () => {};
let Products = () => {
  let card = {};
  return (
    <div>
      <h1>Products Component</h1>
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} style={{ height: "200px", width: "200px" }} />
          <p>{product.price}</p>
          <button onClick={addToCart()}>Add to cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
