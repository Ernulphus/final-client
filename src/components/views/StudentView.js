const StudentView = (props) => {
  const { student } = props;

  // Ternary operator to decide whether to display school or helpful message
  let enrollment = (student.campus
    ? (<h3>Enrolled at {student.campus.name}</h3>)
    : (<h3>Not enrolled at any campus</h3>))

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {enrollment} // School or message
    </div>
  );

};

export default StudentView;