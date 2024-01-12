import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Page Not found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Error;
