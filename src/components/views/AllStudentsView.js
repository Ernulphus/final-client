import { Link } from "react-router-dom";
import Bar from '../views/AppBarView';

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;

  let list = ((students.length)
    ? (<div>{students.map((student) => {
      let name = student.firstname + " " + student.lastname;
      return (
        <div key={student.id}>
        <Link to={`/student/${student.id}`}>
          <h1>{name}</h1>
        </Link>
        <button onClick={() => deleteStudent(student.id)}>X</button>
        </div>
      );})}</div>)
    : (<p>There are no students.</p>)
  )

  return (
    <div>
      <Bar/>
      {list}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};


export default AllStudentsView;