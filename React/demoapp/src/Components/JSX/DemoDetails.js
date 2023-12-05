function DemoDetails() {
  return (
    <>
      <p>
        Category: <i>{}</i>
      </p>
      <img src={item.image} alt={`image-${item.id}`} height="150px" width="150px" />
      <p>Price: {item.price}</p>
      <p>Rating: {}</p>
      <p>Count: {}</p>
    </>
  );
}

export default DemoDetails;
