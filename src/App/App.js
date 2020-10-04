import React from 'react';
import './App.css';
import Login from '../Pages/Login'
import { makeStyles, createMuiTheme, ThemeProvider, MuiAppBar,Menu, MenuItem,Button } from '@material-ui/core';
import SideMenu from '../components/SideMenu'
import Header from '../components/Header';
import Expenses from '../Pages/Expenses/Expenses';
import LoginGet from '../services/loginService';

const theme = createMuiTheme({
 
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  }


})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})



function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);


  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <ThemeProvider theme={theme}>
    <SideMenu>
      <Menu/>
    </SideMenu>

    </ThemeProvider>  
  );
}

export default App;