import { Link, useOutletContext } from "react-router-dom";

const Products = () => {
  const products = useOutletContext();

  return (
    <div>
      <h1>Products Page</h1>
      <div className="product-container">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <h4>Title: {product.title}</h4>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>
              <Link className="products-link" to={`/products/${product.id}`}>
                More Details...
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
