import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

//react router dom

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import SharedComponent from "./Components/SharedComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="/products" element={<SharedComponent />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
