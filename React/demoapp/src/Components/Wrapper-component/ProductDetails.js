let ProductDetails = ({ otherProps }) => {
  let {
    category,
    price,
    rating: { rate },
  } = otherProps;
  return (
    <div>
      <p>Category: {category}</p>
      <p>Price: &#8377; {price}</p>
      <p>Rating: {rate}</p>
    </div>
  );
};

export default ProductDetails;
