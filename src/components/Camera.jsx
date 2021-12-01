import React from 'react'
import Webcam from 'react-webcam'
import { makeStyles} from '@material-ui/core/styles';
import {Container ,IconButton} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';

const useStyles = makeStyles((theme)=> ({
container: {
    flex:4,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width:"100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
        display:"flex",
        maxWidth:"80%",
        marginTop:"90px"
    },
    [theme.breakpoints.up("sm")]: {
        display:"flex",
        maxHeight:"20%",

        maxWidth:"50%",
        marginTop:"100px"
    }
    },


}))


function Camera ()  {
    const classes = useStyles();
    return (
           
           <Container className={classes.container}>
              
               <Webcam/>
               <div >
               <IconButton >
               <CameraIcon color="primary" style={{ fontSize: 40}}/>
               </IconButton>
               </div>
               
           </Container>
       
    )
}

export default Camera