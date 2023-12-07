import "./Components/Intro/styles.css";

// import Header from "./Components/Intro/Header";
// import Navbar from "./Components/Intro/Navbar";
// import Section from "./Components/Intro/Section";
// import Footer from "./Components/Intro/Footer";
// import Demo from "./Components/JSX/Demo";
// import PropDetails from "./Components/JSX/PropDemo";

import products from "./Components/Wrapper-component/data";
import ProductCard from "./Components/Wrapper-component/ProductCard";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Navbar />
      <Section />
      <Footer /> */}
      {/* <Demo /> */}
      {/* <PropDetails /> */}
      {products.map((product) => (
        <ProductCard />
      ))}
    </div>
  );
}

export default App;
