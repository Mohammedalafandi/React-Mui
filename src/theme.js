import { grey } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';


export const theme =  createTheme({
 palette: {
     primary: {
         main: grey[500],
     },
 },

 myButton: {
     backgroundColor: "red",
     color: "white",
     border: "1px solid black",
     borderRadius: "30px",
 }

});