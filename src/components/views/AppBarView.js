import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif',
    fontSize: '35px',
    color: '#808c58'
  },
  appBar:{
    backgroundColor: '#283618',
    shadows: ['none'],
    marginBottom: '2vh',
  },
  links:{
    textDecoration: 'none',
  },
  Button:{
    backgroundColor: '#bc6c25',
  }
}));

const Bar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" className={classes.title} color="inherit" >
        CRUD App
      </Typography>

      <Link className="headerlinks" to={'/'} style={{marginRight: '10px'}}>
          Home
      </Link>

      <Link className="headerlinks" to={'/campuses'} style={{marginRight: '10px'}}>
          All Campuses
      </Link>

      <Link className="headerlinks" to={'/students'} >
          All Students
      </Link>
    </Toolbar>
    </AppBar>
  );
}

export default Bar;