// styles
import "./styles.css";

// react bootstrap
import { Container, Dropdown, FormControl, Navbar, Badge, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";

const Header = () => {
  // const {
  //   state: { cart },
  //   dispatch,
  //   productDispatch,
  // } = CartState();

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
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Products App
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl style={{ width: 500 }} type="search" placeholder="Search a Product" className="m-auto"></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown drop="start">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontFamily="25px" />
              <Badge>5</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.map((prod) => (
                <span key={prod.id} className="cartItem">
                  <img className="cartItemImg" src={prod.image} alt={prod.title} />
                  <div className="cartItemDetails">
                    <span>{prod.name}</span>
                    <span>{prod.price}</span>
                  </div>
                  <AiFillDelete style={{ cursor: "pointer" }} fontSize="20px" />
                </span>
              ))}
              <Link to="/cart">
                <Button style={{ width: "95%", margin: "0 10px" }}>Go to Cart</Button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
