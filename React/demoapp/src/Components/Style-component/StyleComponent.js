import UserDetails from "./UserDetails";

let userDetails = [
  { name: "John", age: 24, City: "Chennai" },
  { name: "Jack", age: 23, City: "Banglore" },
  { name: "Mary", age: 26, City: "Mumbai" },
  { name: "Robert", age: 22, City: "Delhi" },
];

let container = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};
let StyleComponent = () => {
  return (
    <div style={container}>
      {userDetails.map((user, index) => (
        <UserDetails key={index + 1} user={user} />
      ))}
    </div>
  );
};

export default StyleComponent;
