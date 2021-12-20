import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import { Grid } from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Add from './components/Add';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Todolist from './components/Todolist';
import Camera from './components/Camera';


const useStyles = makeStyles((theme)=> ({
 right: {
   [theme.breakpoints.down("sm")]: {
     display:"none",
   }
 }
  }));


const App = () => {
  const classes = useStyles();
  return(
  <Router>
   <Navbar/>
     <Grid container>
       <Grid item sm={2}  xs={2}>
         <Leftbar/>
       </Grid>
       <Switch>
         <Route exact path="/">
       <Grid item sm={7} xs={10} >
         <Feed/>
       </Grid>
       </Route>
       <Route path="/todolist" >
         <Todolist />
       </Route>
      <Route  path="/webcam" >
      <Camera />
      </Route>
       </Switch>
       
       <Grid item sm={3} className={classes.right} >
         <Rightbar/>
       </Grid>
       </Grid > 
       <Add/>         
    </Router>
    
  );
};

export default App;