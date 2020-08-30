import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFF',
        transform:'translateZ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover':{
              backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: '8px'
        }
    }
})

function Header(){

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                 <Grid container
                 alignItems="center">
                    <Grid item sm={4} style={{border:'1px solid #fff'}}>
                        <InputBase 
                         placeholder="Search topics"
                         className={classes.searchInput}
                         startAdornment={<SearchIcon fontSize="small"/>}
                         />
                    </Grid>
                    <Grid item sm={true}></Grid>

                    <Grid item sm={3} style={{border:'1px solid #000'}}>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )

}


export default Header;