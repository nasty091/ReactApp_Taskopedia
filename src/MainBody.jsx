import Student from "./Components/Student/Student";
import StudentReivew from "./Components/Student/StudentReivew";
import React from "react";

class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const totalLecture = 3;

    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building TaskOpedia
          <br />
          Total Lecture - {totalLecture}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        {/* <div>
          Enter Task:{" "}
          <input maxLength={10} readOnly={false} placeholder="Ben"></input>
        </div> */}
        <div className="container row">Students Enrolled</div>
        <Student experience={2} name="Kris Walley">
          <StudentReivew />
        </Student>
        <Student experience={5} name="Angel Patrice">
          <StudentReivew />
        </Student>
        <Student experience={7} name="Rene Parker" />
      </div>
    );
  }
}

export default MainBody;
