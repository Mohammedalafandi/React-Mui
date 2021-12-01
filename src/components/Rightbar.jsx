import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme)=> ({

  Container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top:0,
   },
   title:{
     fontSize:16,
     fontWeight:500,
     color:"#555"
   },
   link: {
     marginRight: theme.spacing(2),
     color:"#555",
     fontSize:16,
       }
   
  }))

const Rightbar = () => {
  const classes = useStyles();
  return(
    <Container className={classes.Container}>
      <Typography className={classes.title} gutterBottom >Online Friends</Typography>
      <AvatarGroup max={4} style={{marginBottom:20}} >
  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5426873/pexels-photo-5426873.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5426873.jpg&fm=jpg" />
  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/8865689/pexels-photo-8865689.jpeg?cs=srgb&dl=pexels-rerisson-hofniel-8865689.jpg&fm=jpg" />
  <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
  <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?cs=srgb&dl=pexels-pixabay-247322.jpg&fm=jpg" />
  <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?cs=srgb&dl=pexels-thiago-schlemper-1918246.jpg&fm=jpg" />
</AvatarGroup>

<Typography className={classes.title} gutterBottom>Gallery</Typography>
<ImageList rowHeight={100} style={{marginBottom:20}} cols={2}>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/olive.jpg" alt="" />
    </ImageListItem>
</ImageList>
<Typography className={classes.title} gutterBottom>
  Categories
  </Typography>
  <Link href="#" className={classes.link} variant="body2" >
    Sport
  </Link>
  <Link href="#" className={classes.link} variant="body2" >
    Food
  </Link>
  <Link href="#" className={classes.link} variant="body2" >
    Music
  </Link>
  <Divider flexItem style={{marginBottom:5}} />
  <Link href="#" className={classes.link} variant="body2" >
    Movies
  </Link>
  <Link href="#" className={classes.link} variant="body2" >
    Science
  </Link>
  <Link href="#" className={classes.link} variant="body2" >
    Life
  </Link>
    </Container>
    
  );
};

export default Rightbar;