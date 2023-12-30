import { useState } from "react";
import { db } from "../Config/firebase-config";
import { doc, updateDoc } from "firebase/firestore";

let EditReminder = ({ editReminder, id }) => {
  const [reminder, setReminder] = useState([editReminder]);

  let updateReminder = async (e) => {
    e.preventDefault();
    try {
      const reminderRef = doc(db, "reminder", id);
      await updateDoc(reminderRef, {
        reminder: reminder,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        //edit modal btn
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#edit-modal-${id}`}
      >
        Edit
      </button>

      {/* Edit modal */}
      <div className="modal fade" id={`edit-modal-${id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                EDIT REMINDER
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" placeholder="Add Reminder" value={reminder} onChange={(e) => setReminder(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  updateReminder(e);
                }}
              >
                Edit Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReminder;
