import { ListGroup, Row, Col, Image, Form, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Context";
import { useState, useEffect } from "react";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  //total
  const [total, setTotal] = useState();
  //refresh the total whenever there is updation is cart
  useEffect(() => {
    setTotal(cart.reduce((acc, currentEle) => acc + Number(currentEle.price) * currentEle.qty, 0));
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col>
                  <span>Rs. {prod.price}</span>
                </Col>
                <Col>
                  <span>{prod.ratings}</span>
                </Col>
                <Col>
                  <Form.Select
                    value={prod.qty}
                    onChange={(e) => {
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: { id: prod.id, qty: e.target.value },
                      });
                    }}
                  >
                    {[...Array(prod.inStock).keys()].map((val) => (
                      <option key={val + 1}>{val + 1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Button
                    type="button"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      });
                    }}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span>Subtotal {cart.length} items</span>
        <span>Total {total}</span>
        <Button type="button">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
