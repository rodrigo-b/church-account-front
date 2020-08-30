import React from 'react';
import './App.css';
import Login from '../Pages/Login'
import { makeStyles, createMuiTheme, ThemeProvider, MuiAppBar } from '@material-ui/core';
import SideMenu from '../components/SideMenu'
import Header from '../components/Header';
import Expenses from '../Pages/Expenses/Expenses';

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
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <SideMenu/>
      <div className={classes.appMain}>
        <Header />
   
        <Expenses/>
      </div>

    </ThemeProvider>  
  );
}

export default App;