import { useState } from "react";

let Form = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
    subjects: "",
    addons: [],
    gender: false,
  });

  const handleForm = (e) => {
    let { value } = e.target; // target = {name: "", value=""} we are destructuring target object and getting value.
    if (e.target.type === "checkbox") {
      setForm((form) => {
        if (e.target.checked) {
          // If checked, add the value
          if (!form.addons.includes(value)) {
            // Only add if not already present
            return {
              ...form,
              addons: [...form.addons, value],
            };
          }
        } else {
          // If unchecked, remove the value
          if (form.addons.includes(value)) {
            // Only remove if present
            return {
              ...form,
              addons: form.addons.filter((v) => v !== value),
            };
          }
        }

        return form; // Return the current form if no changes needed
      });
    } else {
      setForm((form) => {
        return {
          ...form,
          [e.target.name]: value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <h1>Form Component</h1>

      {/*
          1. FirstName - input type ="text"
          2. LastName - input type ="text"
          3. Email - input type ="email"
          4. Phone number - input type ="number"
          5. Address - input type ="textarea"
          6. Subjects - input type ="select
          7. Extras - input type ="checkbox"
          8. Gender - input type ="radio"
  */}

      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="firstname" placeholder="Enter Firstname" value={form.firstname} onChange={handleForm} />
          {/* form is state variable */}
        </p>
        <p>
          <input type="text" name="lastname" placeholder="Enter Lastname" value={form.lastname} onChange={handleForm} />
        </p>
        <p>
          <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleForm} />
        </p>
        <p>
          <input type="number" name="phonenumber" placeholder="Enter Phone number" value={form.phonenumber} onChange={handleForm} />
        </p>
        <p>
          <textarea cols="21" rows="3" name="address" placeholder="Enter Address" value={form.address} onChange={handleForm}></textarea>
        </p>
        <p>
          <label>Select Subjects</label>{" "}
          <select name="subjects" value={form.subjects} onChange={handleForm}>
            <option>English</option>
            <option>Maths</option>
            <option>Physics</option>
            <option>Chemistry</option>
          </select>
        </p>
        <p>
          <label>Avail Addon:</label>
          <input type="checkbox" onChange={handleForm} value="Bus"></input> Bus
          <input type="checkbox" onChange={handleForm} value="Food"></input> Food
          <input type="checkbox" onChange={handleForm} value="Hostel"></input> Hostel
        </p>
        <p>
          <label>Male</label>
          <input type="radio" name="gender" value="male" onChange={handleForm} />
          <label>Female</label>
          <input type="radio" name="gender" value="female" onChange={handleForm} />
        </p>
        <hr />
        <input type="submit" value="Submit" /> <input type="reset" value="Clear" />
      </form>
    </div>
  );
};

export default Form;
