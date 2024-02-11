import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const useCredentials = await auth.signInWith;
    } catch (error) {}
  };
  return <form onSubmit={handleLogin}></form>;
};

export default Login;
