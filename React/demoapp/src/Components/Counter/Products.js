import { useState } from "react";
import data from "./data";

let Products = () => {
  let [count, setCount] = useState(0);
  let [cart, setCart] = useState([]);

  // css
  let card = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };

  let child = {
    border: "2px solid red",
    minHeight: "400px",
    width: "400px",
    padding: "20px",
    margin: "10px",
  };
  let addToCart = (product) => {
    // console.log(product);

    setCart((cart) => [...cart, product]);
    setCount((count) => (count = count + 1));
  };
  let removeFromCart = () => {};
  return (
    <div>
      <h1>Products Component</h1>
      {/* dynamically change the values */}
      <h3>No of products in card: {count}</h3>
      <h3>The Products in the cart: {cart.join(", ")}</h3>
      <hr />
      <div style={card}>
        {data.map((product) => (
          <div key={product.id} style={child}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} style={{ height: "100px", width: "100px" }} />
            <p>&#8377; {product.price}</p>

            <button
              onClick={() => {
                addToCart(product.title);
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                removeFromCart();
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
