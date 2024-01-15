import { ListGroup, Row, Col, Image } from "react-bootstrap";

const Cart = () => {
  const cart = [
    {
      id: "9882d49f-bfab-45a2-9e64-22f297df47cc",
      image: "https://loremflickr.com/640/480?lock=773740273074176",
      inStock: 0,
      name: "Licensed Concrete Gloves",
      price: "365",
      quickDelivery: false,
      ratings: 4,
    },
    {
      id: "ef84cb59-02dd-403c-94a6-982d672791ce",
      image: "https://picsum.photos/seed/jpc2ydy/640/480",
      inStock: 5,
      name: "Elegant Frozen Table",
      price: "330",
      quickDelivery: true,
      ratings: 3,
    },
    {
      id: "d211e4f4-e6d2-4b8c-9458-186525d402fd",
      image: "https://picsum.photos/seed/XzDF6S5gga/640/480",
      inStock: 6,
      name: "Bespoke Frozen Soap",
      price: "668",
      quickDelivery: false,
      ratings: 1,
    },
  ];
  return (
    <div className="home">
      <div className="productContainer">
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
            </Row>
          </ListGroup.Item>
        ))}
      </div>
    </div>
  );
};

export default Cart;
