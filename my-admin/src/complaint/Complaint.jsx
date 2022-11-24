import React, { useState, useEffect } from "react";
import View from "./View";
import Dropdown from "./Dropwdown";
import { useNavigate } from "react-router-dom";
// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("complaints");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const Complaint = () => {
  // main array of objects state || books state || books array of objects
  const [complaints, setComplaints] = useState(getDatafromLS());

  // input field states
  const [reason, setReason] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  // form submit event
  const handleAddComplaintSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let complaint = {
      reason,
      message1,
      message2,
      message3,
    };
    setComplaints([...complaints, complaint]);
    setReason("");
    setMessage1("");
    setMessage2("");
    setMessage3("");
  };
  let addFormField = () => {
    setComplaints([
      ...complaints,
      { reason: "", message1: "", message2: "", message3: "" },
    ]);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("complaints", JSON.stringify(complaints));
  }, [complaints]);

  const options = [
    { label: "Complaint1", value: "Complaint1" },

    { label: "Complaint2", value: "Complaint2" },

    { label: "Complaint3", value: "Complaint3" },
  ];
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div className="wrapper">
      <h1>Complaint App</h1>
      <h4 style={{ textAlign: "center" }}>Welcome, {userName.name}</h4>
      <p>Add and view of complaints</p>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          className="btn btn-success align-item-center"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddComplaintSubmit}
          >
            <label>Reason</label>
            <div>
              <Dropdown
                options={options}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <br></br>
            <label>Message1</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setMessage1(e.target.value)}
              value={message1}
            ></input>
            <br></br>
            <label>Message2</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setMessage2(e.target.value)}
              value={message2}
            ></input>
            <label>Message3</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setMessage3(e.target.value)}
              value={message3}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {complaints.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Reason</th>
                      <th>Message1</th>
                      <th>Message2</th>
                      <th>Message3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View complaints={complaints} />
                  </tbody>
                </table>
              </div>
              {/* <button
                className="btn btn-danger btn-md"
                onClick={() => setbooks([])}
              >
                Remove All
              </button> */}
            </>
          )}
          {complaints.length < 1 && <div>No complaint are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default Complaint;
