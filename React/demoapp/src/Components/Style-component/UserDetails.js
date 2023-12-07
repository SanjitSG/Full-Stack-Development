let UserDetails = ({ user }) => {
  let { name, age, City } = user;
  return (
    <div class="user-info">
      <h3>User Details</h3>
      <p>Name:{name}</p>
      <p>Age: {age}</p>
      <p>City: {City}</p>
    </div>
  );
};

export default UserDetails;
