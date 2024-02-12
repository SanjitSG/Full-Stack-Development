import { Alert, Button, Input } from "@mui/material";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);

      { <Alert>Login successful !!</Alert> }
    } catch (error) {
      setError(error.message);
      <Alert>{error}</Alert>;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert>{error}</Alert>}
      <label>
        Email:
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
