// firebase import
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc, runTransaction } from "firebase/firestore";
import { db } from "../Config/firebase-config";

// state variable
import { useState, useEffect } from "react";
import EditReminder from "./EditReminder";

let Reminder = () => {
  const collectionRef = collection(db, "reminder");

  //state variables
  const [createReminder, setCreateReminder] = useState("");
  const [reminders, setReminders] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const getReminders = async () => {
      await getDocs(collectionRef).then((reminder) => {
        let reminderData = reminder.docs.map((doc) => ({
          ...doc.data(), // so this object will have properties of data and id { prop: val , prop: val, ... , id: doc.id} [...doc.data() holds the ]
          id: doc.id,
        }));
        setReminders(reminderData);
        setChecked(reminderData);
      });
    };

    getReminders();
  }, []);

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

  let deleteReminder = async (id) => {
    try {
      if (window.confirm("Are you sure to delete the reminder?")) {
        const documentRef = doc(db, "reminder", id); // we are trying to get corresponding id details using id
        // doc method is used to access individual documents of the collection
        await deleteDoc(documentRef);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  let changeHandler = async (e, reminder) => {
    setChecked((state) => {
      const indexToUpdate = state.findIndex((checkBox) => checkBox.reminder === reminder);
      // console.log(indexToUpdate);

      let newState = [...state];
      // console.log(newState);
      newState.splice(indexToUpdate, 1, {
        ...state[indexToUpdate],
        isChecked: !state[indexToUpdate].isChecked,
      });
      setReminders(newState);
      return newState;
    });

    try {
      const docRef = doc(db, "reminder", e.target.name);
      await runTransaction(db, async (transaction) => {
        const reminderDoc = await transaction.get(docRef);
        if (!reminderDoc.exists()) {
          throw "Document not exists";
        }
        const newValue = !reminderDoc.data().isChecked;
        transaction.update(docRef, { isChecked: newValue });
      });
      console.log("Transaction / updation performed successfully");
    } catch (error) {
      console.log(`Transaction failed: ${error}`);
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
                {/* Reminders to display */}
                {reminders.map(({ id, reminder, isChecked, timestamp }) => (
                  <div className="reminder-list" key={id}>
                    <div className="reminder-item">
                      <hr />
                      <span className={`${isChecked === true ? "done" : ""}`}>
                        <div className="checker">
                          <span className="">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              name={id}
                              onChange={(e) => {
                                changeHandler(e, reminder);
                              }}
                            />
                          </span>
                        </div>{" "}
                        {reminder} <br />
                        <i>{new Date(timestamp.seconds * 1000).toLocaleString()}</i>
                      </span>
                      <span className="float-end mx-3">
                        <EditReminder editReminder={reminder} id={id} />
                      </span>
                      <button type="button" className="btn btn-danger float-end" onClick={() => deleteReminder(id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
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
