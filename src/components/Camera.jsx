import React , { useState } from 'react';
import Webcam from 'react-webcam'
import { makeStyles} from '@material-ui/core/styles';
import {Container ,IconButton} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';

const WebcamCapture = () => {
    
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


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


    const classes = useStyles();
    return (
           
           <Container className={classes.container}>
              
              {image === '' ? <Webcam
                    audio={false}
                   
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                   
                    
                /> : <img src={image} />}
            <div>
                {image !== '' ?
                    <IconButton  style={{ fontSize: 39}} onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        >
                            <CameraIcon style={{ fontSize: 39}}/>
                       </IconButton > :
                    <IconButton   onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        >
                            <CameraIcon color="primary" style={{ fontSize: 40}}/>
                        </IconButton>
                }
            </div>
               
           </Container>
       
    )
};

export default WebcamCapture;