import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Post from './Post';



const useStyles = makeStyles((theme)=> ({

  Container: {
    paddingTop: theme.spacing(10),
   },
   
  }))




const Feed = () => {
  const classes = useStyles();
  return(
   <Container className={classes.Container}>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
   </Container>
    
  );
};

export default Feed;