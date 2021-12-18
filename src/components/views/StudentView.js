const StudentView = (props) => {
  const { student } = props;

  let enrollment = (student.campus
    ? (<h3>Enrolled at {student.campus.name}</h3>)
    : (<h3>Not enrolled at any campus</h3>))

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {enrollment}
    </div>
  );

};

export default StudentView;