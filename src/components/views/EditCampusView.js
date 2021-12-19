import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bar from '../views/AppBarView';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  formContainer:{
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },

}));

const EditCampusView = (props) => {
  const {handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Bar />
      <div className="formcontainer">
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Edit Campus<br/>
            Leave any field blank to keep it the same
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
          <input type="text" name="name" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
          <input type="text" name="imageURL" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Add students by ID: </label>
          <input type="text" name="addstudent" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Remove students by ID: </label>
          <input type="text" name="removestudent" onChange={(e) => handleChange(e)} />
          <br/>
          <p>Add/Remove Students with comma-seperated lists, e.g. 1,2,3</p>
          <br/>


          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>
        </div>
      </div>

  )
}

export default EditCampusView;