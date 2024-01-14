import { Form } from "react-bootstrap";
const Filter = () => {
  return (
    <div className="filters">
      <span className="title">Filter Section</span>
      <span>
        <Form.Check inline label="A-Z" name="group" type="radio" />
        <Form.Check inline label="Z-A" name="group" type="radio" />
      </span>
    </div>
  );
};

export default Filter;
