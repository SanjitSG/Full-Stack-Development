import UserDetailsProp from "./UserDetailsProp";
let PropDetails = () => {
  let displayName = (name) => {
    console.log(name);
  };
  let userDetails = [
    { id: 1, name: "John", age: 23, isAdmin: true, address: { city: "Panaji", state: "GA" } },
    { id: 2, name: "Jack", age: 25, isAdmin: false, address: { city: "Chennai", state: "TN" } },
    { id: 3, name: "Mary", age: 21, isAdmin: false, address: { city: "Pune", state: "MH" } },
    { id: 4, name: "Robert", age: 27, isAdmin: true, address: { city: "New Delhi", state: "DL" } },
  ];

  return (
    <div>
      {userDetails.map((user) => (
        <div key={user.id}>
          <h1>Username: {user.name}</h1>
          <UserDetailsProp {...user} displayName={displayName} />
        </div>
      ))}
    </div>
  );
};

export default PropDetails;
