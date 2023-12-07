let Card = ({ title, children }) => {
  // console.log(title);
  // console.log(children);
  return (
    <div>
      <h3>Title: {title}</h3>
      {children}
    </div>
  );
};

export default Card;
