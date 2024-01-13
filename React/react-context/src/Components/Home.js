import Filter from "./Filter";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import { useContext } from "react";
const Home = () => {
  const {
    state: { products },
    productState: { byStock, byQuickDelivery, byRating, searchQuery },
  } = CartState();

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
