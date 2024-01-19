import Filter from "./Filter";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, quickDelivery, byRating, searchQuery, sort },
  } = CartState();
  function transformProducts() {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (sort === "lowToHigh" ? a.price - b.price : b.price - a.price));
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (quickDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.quickDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating); // == if we want to display exact matching stars
    }
    return sortedProducts;
  }
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
