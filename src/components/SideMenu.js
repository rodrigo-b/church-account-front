import React from 'react'
import {makeStyles, withStyles, Menu, MenuItem} from '@material-ui/core'
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import InfoIcon from '@material-ui/icons/Info';
import Header from '../components/Header';

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import DepositForm from '../Pages/Deposit/DepositForm'
import ExpensesForm from '../Pages/Expenses/ExpensesForm';


const drawerWidth = 240;
  
const useStyles = makeStyles((theme) => ({
    sideMenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: 'darkolivegreen'    
    },

    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    
    drawerPaper: { width: 'inherit' },

    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },

    appMain:{
      paddingLeft:'320px',
      width:'100%'
    }

  }));


  const handleDepositClick = event => {  
    console.log("CAIXA");  
  }; 

  const handleReportClick = event => {  
    console.log("RELATORIO");  
  }; 

  const handleMemberClick = event => {  
    console.log("MEMBROS");  
  }; 

  const handleExpensesClick = event => {  
    console.log("DESPESAS");  
  }; 

function SideMenu(props){

    const classes = useStyles();

    console.log(props);
    return(                    
      <Router>
      <div style={{ display: 'flex' }}  >
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Inicio"} />
              </ListItem>
            </Link>
            <Link to="/form/deposit" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Caixa"} />
              </ListItem>
            </Link>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Relatorio"} />
              </ListItem>
            </Link>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Membros"} />
              </ListItem>
            </Link>
            <Link to="/form/expenses" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary={"Despesas"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/">

          </Route>
          <Route exact path="/">

          </Route>
          <Route exact path="/">

          </Route>  
          <Route exact path="/">

          </Route>
          <Route exact path="/form/deposit">
            <div className={classes.appMain}>
              <DepositForm/>
            </div>
          </Route>
          <Route exact path="/form/expenses">
            <div className={classes.appMain}>
              <ExpensesForm/>
            </div>     
          </Route>                                  
        </Switch>
      </div>
    </Router>
    );
}

export default SideMenu;
