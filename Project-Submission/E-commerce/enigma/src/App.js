import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import { useContext } from "react";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </>
        )}
        {isAuthenticated && {}}
      </Routes>
    </Router>
  );
}

export default App;
