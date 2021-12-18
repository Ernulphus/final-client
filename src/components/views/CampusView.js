

const CampusView = (props) => {
  const {campus} = props;

  let campusInfo = (
    <div>
      <img src={campus.imageURL}/>
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <p>{campus.description}</p>
    </div>
  )

  if (!campus.students.length)
    return (
      <div>
        {campusInfo}
        <div>There are no students enrolled in this school.</div>
      </div>
    );

  else return (
      <div>
        {campusInfo}
        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>{name}</li>
          );
        })}
        </ul>
      </div>
    );
};

export default CampusView;