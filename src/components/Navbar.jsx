import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Cancel, Mail, NotificationImportant, Search } from '@material-ui/icons';
import { useState } from 'react';


const useStyles = makeStyles((theme)=> ({

    toolbar: {
        display:"flex",
        justifyContent: 'space-between'
    },

    logolg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display:"block"
        }
    },
    logosm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display:"none",
            
        }
        
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white,0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white,0.25),
        },
        borderRadius: theme.shape.borederRadius=10,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props)=> (props.open ? "flex" : "none"),
            width:"70%",
        },
       
    },
    searchButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
       
        [theme.breakpoints.down("md")]: {
            display: "flex",
        },
        [theme.breakpoints.up("md")]: {
            display:"none",
            
        },
        cursor:"pointer",
        
    },

    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        },
        [theme.breakpoints.down("lg")]:{
            marginLeft: "30%"
        },
        [theme.breakpoints.down("md")]: {
            display:"flex",
            marginLeft:"70%"
        },
        cursor: "pointer",
    },
    icons: {
        alignItems:"center",
        cursor:"pointer",
         display: (props)=> (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: theme.spacing(2),
    },

  }))


const Navbar = () => {
    const [open,setOpen]= useState(false);
  const classes = useStyles({open});
  return(
  <AppBar position='fixed'>
    <Toolbar className={classes.toolbar}>
        
<Typography variant="h6" className={classes.logolg} >
   MO.A Dev
</Typography>
<Typography variant="h6" className={classes.logosm} >
   MO.A
</Typography>
<div className={classes.search}>
<Search/>
<InputBase placeholder="Search..." className={classes.input} />
<Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
</div>
  <div className={classes.icons}> 
      <Search className={classes.searchButton} onClick={()=> setOpen(true)}/>
      <Badge badgeContent={4} color="secondary" className={classes.badge} > 
      <Mail />
     </Badge>
     <Badge badgeContent={2} color="secondary" className={classes.badge} > 
      <NotificationImportant />
     </Badge>
     <Avatar alt="Remy Sharp" src="pngegg.png" />

  </div>

    </Toolbar>
               
    </AppBar>
    
  );
};

export default Navbar;