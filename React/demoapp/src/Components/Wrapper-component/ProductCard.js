import ProductDetails from "./ProductDetails";

let ProductCard = ({ product }) => {
  let { title, description, ...otherProps } = product;
  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
      <ProductDetails otherProps={otherProps} />
      <hr />
    </div>
  );
};

export default ProductCard;
