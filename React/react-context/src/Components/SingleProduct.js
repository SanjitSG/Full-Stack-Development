import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Title className="title">{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs. {prod.price}</span>
            {prod.quickDelivery ? <div>Fast Delivery</div> : <div>Standard Delivery</div>}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove form Cart
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
