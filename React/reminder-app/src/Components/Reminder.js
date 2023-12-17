// firebase import
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Config/firebase-config";

// state variable
import { useState } from "react";

import Edit from "./EditReminder";

let Reminder = () => {
  const collectionRef = collection(db, "reminder");
  const [createReminder, setCreateReminder] = useState("");

  const submitReminder = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collectionRef, {
        reminder: createReminder,
        isChecked: false,
        timestamp: serverTimestamp(),
      });
      window.location.reload(); // adding the details, window will automatically reload
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* Modal Trigger button */}
      <div className="container">
        <h2 className="display-2 text-center">REMINDER APP</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <button
                  // bootstrap modal
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                  type="button"
                  className="btn btn-primary"
                >
                  Add Reminder
                </button>

                <div className="reminder-list">
                  <div className="reminder-item">
                    <hr />
                    <span>
                      <div className="checker">
                        <span className="">
                          <input type="checkbox" />
                        </span>
                      </div>{" "}
                      Do React Assignments <br />
                      <i>24/12/2023</i>
                    </span>
                    <span className="float-end mx-3">
                      <Edit />
                    </span>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <div className="modal fade" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                ADD REMINDER
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" placeholder="Add Reminder" onChange={(e) => setCreateReminder(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={submitReminder}>
                Create Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reminder;
