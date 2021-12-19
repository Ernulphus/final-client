import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Bar from '../views/AppBarView';

const AllCampusesView = (props) => {
  const {campuses, deleteCampus} = props;

  // Ternary operator to display either list of schools or helpful message
  let list = ((props.allCampuses.length)
    ? (<div>{props.allCampuses.map((campus) => (
      <div classname="campuses" key={campus.id}>
        <Link classname="campuslink" to={`/campus/${campus.id}`}>
          <h1>{campus.name}</h1>
        </Link>
        <p>{campus.description}</p>
        <button onClick={() => deleteCampus(campus.id)}>X</button>
      </div>
    ))}</div>)
    : (<div>There are no campuses.</div>)
  )

  return (
    <div>
      <Bar/>
      {list}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;