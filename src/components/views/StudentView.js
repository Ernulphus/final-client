import { Link } from 'react-router-dom';

const StudentView = (props) => {
  const { student } = props;

  // Ternary operator to decide whether to display school or helpful message
  let enrollment = (student.campus
    ? (<h3>Enrolled at <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link></h3>)
    : (<h3>Not enrolled at any campus</h3>))

  return (
    <div>
      <img src={student.imageURL}/>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h1>{student.email}</h1>
      {enrollment}
      <h2>GPA: {student.gpa}</h2>
    </div>
  );

};

export default StudentView;