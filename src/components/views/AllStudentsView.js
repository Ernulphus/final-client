import { Link } from "react-router-dom";
import Bar from '../views/AppBarView';

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;

  let list = ((students.length)
    ? (<div class="lists">{students.map((student) => {
      let name = student.firstname + " " + student.lastname;
      return (
        <div class="namedesc" key={student.id}>
          <Link class="campuslink" to={`/student/${student.id}`}>
            {name}
          </Link>
          <button onClick={() => deleteStudent(student.id)}>X</button>
        </div>
      );})}</div>)
    : (<p>There are no students.</p>)
  )

  return (
    <div>
      <Bar/>
      <div class="campuses">
      {list}
      <Link to={`/newstudent`} class="newbutton">
        Add New Student
      </Link>
      </div>
    </div>
  );
};


export default AllStudentsView;