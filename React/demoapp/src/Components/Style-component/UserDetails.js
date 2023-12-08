let UserDetails = ({ user }) => {
  let { name, age, City } = user;
  let userInfo = {
    border: "2px solid red",
    marginBottom: "10px",
    padding: "10px",
    height: "150px",
    width: "150px",
  };
  return (
    <div style={userInfo}>
      <h3>User Details</h3>
      <p>Name:{name}</p>
      <p>Age: {age}</p>
      <p>City: {City}</p>
    </div>
  );
};

export default UserDetails;
