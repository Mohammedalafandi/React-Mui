import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Typography,Container,Button,AppBar,Tab,Tabs,Box} from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const useStyles = makeStyles((theme)=> ({
    Container: {
      
    flex:4,
    paddingTop: theme.spacing(12), 
    
   
},
button: {
    display:"inline",
    marginLeft: theme.spacing(1),
    

},

typo: {
   marginBottom: theme.spacing(5),
   [theme.breakpoints.down("sm")]:{
       fontSize:"22px"
       
   }

},
field: {
    paddingTop: theme.spacing(2),
    display:"inline",
   
},
item:{
    display:"inline",
    
    
},
tabpanel:{
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(4),
  },

}))


function Todolist() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
     
 <Container  className={classes.Container} maxWidth="sm">
           
  <Typography variant="h3" className={classes.typo}>MY Todo List</Typography>
    <div className={classes.item}>
    <TextField className={classes.field}  id="outlined-multiline-static"
             defaultValue="Todo"
             variant="outlined"     
            label="AddTodo" size="small" style={{width:"100%"}} />
    <Button className={classes.button} variant="contained" color="primary">
            Add
     </Button>
     <div className={classes.tabpanel}>
        </div>
     
     <AppBar position="static">
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="All" {...a11yProps(0)} />
    <Tab label="Completed" {...a11yProps(1)} />
    <Tab label="Incompleted" {...a11yProps(2)} />
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
  All
</TabPanel>
<TabPanel value={value} index={1}>
  Completed
</TabPanel>
<TabPanel value={value} index={2}>
  Incompleted
</TabPanel>
             </div>
   </Container>
   
        
      )
  }


export default Todolist
