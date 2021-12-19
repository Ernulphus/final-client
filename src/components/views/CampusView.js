import { Link } from 'react-router-dom';
import Bar from '../views/AppBarView';

const CampusView = (props) => {
  const {campus} = props;

  // Ternary operator to decide whether to display students or a helpful message
  let studentInfo = ((campus.students.length)
    ? (<ul>
    {campus.students.map( student => {
      let name = student.firstname + " " + student.lastname;
      return (<li key={student.id}><Link to={`/student/${student.id}`}>{name}</Link></li>);
    })}
    </ul>)
    : (<div>There are no students enrolled in this school.</div>)
  )

  return (
    <div>
      <Bar />
      <img src={campus.imageURL} alt="Campus icon"/>
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <p>ID: {campus.id}<br/>{campus.description}</p>
      {studentInfo}
      <Link to={`/campus/${campus.id}/edit`}>Edit campus</Link>
    </div>
  )
};

export default CampusView;