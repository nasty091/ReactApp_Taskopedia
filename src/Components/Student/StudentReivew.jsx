import React from "react";

class StudentReivew extends React.Component {
  render() {
    return (
      <div className="p-2">
        <i
          class="bi bi-hand-thumbs-up-fill text-success p-1"
          style={{ cursor: "pointer" }}
        ></i>
        <i
          class="bi bi-hand-thumbs-down-fill text-danger"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }
}

export default StudentReivew;
