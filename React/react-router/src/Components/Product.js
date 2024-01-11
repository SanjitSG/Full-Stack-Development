import { useParams, Link, useOutletContext } from "react-router-dom";

const Product = () => {
  let { productId } = useParams();
  const products = useOutletContext();

  const product = products.find((product) => product.id === Number(productId));
  console.log(product);

  return (
    <div className="single-product-parent-container">
      <h1>Single Product Component</h1>
      <div className="single-product">
        <div id="left">
          <img src={product?.image} height="100px" width="100px" />
        </div>
        <div id="right">
          <p>
            <span>{product?.id}</span> <span id="category">{product?.category}</span>
          </p>
          <p>
            <span id="product-title">{product?.title}</span>
          </p>
          <p>
            <span class="secondary-title">Description:</span>
            <span id="description">{product?.description}</span>
          </p>
          <h5>&#8377; {product?.price}</h5>
          <p>Rating: {product?.rating?.rate}</p>
          <p>Count: {product?.rating?.count} </p>
          <button>Add to cart</button>
        </div>
      </div>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Product;
