import React from 'react'
import ExpensesForm from './ExpensesForm';
import PageHeader from '../../components/PageHeader';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

function Expenses(){

    const classes = useStyles();

    return (
       <>
        <PageHeader 
            title="New Expense"
            subTitle="Expense Form"
            icon=""
        />

        <Paper className={classes.pageContent}>
            <ExpensesForm />
        </Paper>
       </> 
    )

}

export default Expenses;