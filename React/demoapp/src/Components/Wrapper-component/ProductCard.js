import ProductDetails from "./ProductDetails";
import Card from "./Card";

let ProductCard = ({ product }) => {
  let { title, description, ...otherProps } = product;
  return (
    <Card title={title}>
      <p>Description: {description}</p>
      <ProductDetails otherProps={otherProps} />
      <hr />
    </Card>
  );
};

export default ProductCard;
