import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Bar from '../views/AppBarView';

const AllCampusesView = (props) => {
  const {deleteCampus} = props;

  // Ternary operator to display either list of schools or helpful message
  let list = ((props.allCampuses.length)
    ? (<div class="lists">{props.allCampuses.map((campus) => (
      <div key={campus.id}>
        <div class="namedesc">
          <Link class="campuslink" to={`/campus/${campus.id}`}>
            {campus.name}
          </Link>
          <button onClick={() => deleteCampus(campus.id)}>X</button>
        </div>
        <br />
        <p>{campus.description}</p>
        <br/>
      </div>
    ))}</div>)
    : (<div><h1>There are no campuses.</h1></div>)
  )

  return (
    <div>
      <Bar/>
      <div class="campuses">
      {list}
      <br/>
      <Link to={`/newcampus`} class="newbutton">
        Add New Campus
      </Link>
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;