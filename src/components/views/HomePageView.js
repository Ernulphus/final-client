import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Bar from '../views/AppBarView';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  }

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Bar/>

      <div className={classes.greeting}><h1>Home Page</h1></div>
    </div>
  );
}




export default HomePageView;
