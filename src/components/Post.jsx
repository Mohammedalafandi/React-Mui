import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme)=> ({
  card: {
    marginBottom: theme.spacing(5),
  } ,

  media: {
        height: 250,
    },
  [theme.breakpoints.down("sm")]: {
    height:150,
  },
   
  }));




const Post = () => {
  const classes = useStyles();
  return (
  <Card className={classes.card}>
      <CardActionArea>
          <CardMedia className={classes.media}
          image="https://images.pexels.com/photos/10011515/pexels-photo-10011515.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
          />
          <CardContent>
              <Typography gutterBottom variant="h5">My first Post</Typography>
              <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Fugit similique aspernatur aut praesentium ab minima autem ex,
                rerum vitae itaque delectus illum laborum earum reprehenderit. 
                Deserunt consequatur qui iure repellat!
              </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary"> Learn More</Button>
          </CardActions>
      </CardActionArea>
  </Card>
  )
};

export default Post;