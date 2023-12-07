import "./Components/Intro/styles.css";
import "./App.css";
// import Header from "./Components/Intro/Header";
// import Navbar from "./Components/Intro/Navbar";
// import Section from "./Components/Intro/Section";
// import Footer from "./Components/Intro/Footer";
// import Demo from "./Components/JSX/Demo";
// import PropDetails from "./Components/JSX/PropDemo";

// Wrapper-component
// import products from "./Components/Wrapper-component/data";
// import ProductCard from "./Components/Wrapper-component/ProductCard";

//Style Component
import StyleComponent from "./Components/Style-component/StyleComponent";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Navbar />
      <Section />
      <Footer /> */}
      {/* <Demo /> */}
      {/* <PropDetails /> */}
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      <StyleComponent />
    </div>
  );
}

export default App;
