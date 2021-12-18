

const CampusView = (props) => {
  const {campus} = props;

  // Ternary operator to decide whether to display students or a helpful message
  let studentInfo = ((campus.students.length)
    ? (<ul>
    {campus.students.map( student => {
      let name = student.firstname + " " + student.lastname;
      return (<li key={student.id}>{name}</li>);
    })}
    </ul>)
    : (<div>There are no students enrolled in this school.</div>)
  )

  return (
    <div>
      <img src={campus.imageURL}/>
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <p>{campus.description}</p>
      {studentInfo}
    </div>
  )
};

export default CampusView;