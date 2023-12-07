let ProductDetails = ({ otherProps }) => {
  let {
    id,
    category,
    price,
    rating: { rate },
  } = otherProps;
  return (
    <div>
      <h3>
        <u>Product Details:</u>
      </h3>
      <p>Product ID: {id}</p>
      <p>Category: {category}</p>
      <p>Price: &#8377; {price}</p>
      <p>Rating: {rate}</p>
    </div>
  );
};

export default ProductDetails;
