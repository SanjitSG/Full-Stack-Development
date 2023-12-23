let EditReminder = () => {
  return (
    <div>
      <button
        //edit modal btn
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        Edit
      </button>

      {/* Edit modal */}
      <div className="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                EDIT REMINDER
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" placeholder="Edit Reminder" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Update Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReminder;