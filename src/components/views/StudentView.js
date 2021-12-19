import { Link } from 'react-router-dom';
import Bar from '../views/AppBarView';

const StudentView = (props) => {
  const { student } = props;

  // Ternary operator to decide whether to display school or helpful message
  let enrollment = (student.campus
    ? (<h3>Enrolled at <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link></h3>)
    : (<h3>Not enrolled at any campus</h3>))

  return (
    <div>
      <Bar />
      <div class="profile">
        <img src={student.imageURL} alt="Student icon"/>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h1>{student.email}</h1>
        {enrollment}
        <h2>GPA: {student.gpa}</h2>
        <h2>ID: {student.id}</h2>
        <Link to={`/student/${student.id}/edit`}>Edit profile</Link>
      </div>
    </div>
  );

};

export default StudentView;