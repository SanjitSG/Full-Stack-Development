import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Title className="title">{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs. {prod.price}</span>
            <div>Fast Delivery</div>
            <div>Standard Delivery</div>
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          <Button variant="primary">Add to Cart</Button> {"   "}
          <Button variant="danger">Remove form Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
