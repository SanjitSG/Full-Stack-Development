let UserDetailsProp = ({ age, isAdmin, address: { city, state }, name, displayName }) => {
  let userCity = (city, name) => {
    displayName(name);
    console.log(city);
  };
  return (
    <div>
      <p>age: {age}</p>
      <p>isAdmin: {String(isAdmin)}</p>
      <p>
        Address: {city}, {state}
      </p>
      <button onClick={() => userCity(city, name)}>Display City</button>
    </div>
  );
};

export default UserDetailsProp;
