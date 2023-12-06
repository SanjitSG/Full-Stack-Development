import { data, imgOne, imgTwo, displayMessage } from "./data";
import DemoDetails from "./DemoDetails";
let name = "Jack";
let subject = "ReactJS";
let moreDetails = false;

displayMessage("John");
function Demo() {
  return (
    <>
      <h1>Welcome, {name}</h1>
      <p>Introduction to {subject}</p>
      <hr />
      {/* <img src={imgOne} width="400px" height="400px" />
      <img src={imgTwo} width="400px" height="400px" /> */}

      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>
              Title: <i>{item.title}</i>
            </h2>

            <h3>
              Description: <i>{item.description}</i>
            </h3>

            <DemoDetails restItem={item} />

            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Demo;
