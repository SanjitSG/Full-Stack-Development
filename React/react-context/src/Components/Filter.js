import { Form, Button } from "react-bootstrap";
const Filter = () => {
  return (
    <div className="filters">
      <span className="title">Filter Section</span>
      <span>
        <Form.Check inline label="A-Z" name="group" type="radio" id={`inline-1`} />
      </span>
      <span>
        <Form.Check inline label="Z-A" name="group" type="radio" id={`inline-2`} />
      </span>
      <span>
        <Form.Check inline label="Include Out of Stock" name="group1" type="checkbox" id={`inline-3`} />
      </span>
      <span>
        <Form.Check inline label="Quick Delivery only" name="group1" type="checkbox" id={`inline-4`} />
      </span>
      <span style={{paddingRight:10}}>
        <label>Ratings: </label>
       
      </span>
      <Button variant="primary">Clear Filter</Button>
    </div>
  );
};

export default Filter;
