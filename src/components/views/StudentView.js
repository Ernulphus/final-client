const StudentView = (props) => {
  const { student } = props;
  if (student.campus)
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>Enrolled at {student.campus.name}</h3>
    </div>
  );
  else
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>Not enrolled at any campus</h3>
    </div>
  )

};

export default StudentView;