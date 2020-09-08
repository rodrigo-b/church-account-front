import React from 'react'
import {  Grid } from '@material-ui/core';
import {UseForm,Form} from '../../components/UseForm'
import Controls from '../../components/controls/Controls'
import * as expenseService from '../../services/expensesService'

const testItems = [
    {id:'valor1', title:'valor1'},
    {id:'valor2', title:'valor2'}
]

const initialValues = {
    id: 0,
    name: '',
    responsible: '',
    amount: 0,
    creationDate: new Date(),
    test:'valor2',
    departmentId:'',
    isPermanent: false,
}


function ExpensesForm(){


    const{
        values,
        setValues,
        handleInputChange,
    } = UseForm(initialValues);


    const handleSubmit = e => {

        e.preventDefault();
       // expenseService.createExpense(e);
        console.log('Chamou a acao')
    }

    return (
        
            <Form onSubmit={(e) => {
                e.preventDefault();
                // expenseService.createExpense(e);
                 console.log('Chamou a acao')         
            }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input 
                            name="name"
                            label="Full Name"
                            value={values.name}
                            onChange={handleInputChange}
                        />

                        <Controls.Input
                            variant="outlined"
                            label="Responsible"
                            name="responsible"
                            value={values.responsible}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>

                        <Controls.RadioGroup
                            name="test"
                            label="test"
                            value={values.test}
                            onChange = {handleInputChange}
                            items = {testItems}

                        />

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={expenseService.getDepartmentCollection()}
                    />

                    <Controls.DatePicker
                        name="creationDate"
                        label="Creation Date"
                        value={values.creationDate}
                        onChange={handleInputChange}                            
                    />
                    

                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Expense"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />


         
                    </Grid>
                </Grid>
                <div>
                            <Controls.Button
                                type="submit"
                                text="submit"                               
                            />
                            <Controls.Button
                                text="Reset"
                                color="default"
                            />                        
                        </div>
            </Form>
                    
        
    )

}

export default ExpensesForm;