import React from 'react'
import {  Grid } from '@material-ui/core';
import {UseForm,Form} from '../../components/UseForm'
import Controls from '../../components/controls/Controls'
import * as expenseService from '../../services/depositServices'

const expenseItems = [
    {id:'AGUA', title:'AGUA'},
    {id:'LUZ', title:'LUZ'},
    {id:'IMPOSTO', title:'IMPOSTO'},
    {id:'REFORMA', title:'REFORMA'}
]

const initialValues = {
    id: 0,
    name: '',
    responsible: '',
    amount: 0,
    creationDate: new Date(),
    expenseType:'AGUA',
    departmentId:'',
    isPermanent: false,
    amount:0
}


function DepositForm(){


    const{
        values,
        setValues,
        handleInputChange,
    } = UseForm(initialValues);


    return (
        
            <Form  onSubmit= {(e) => {
                        e.preventDefault();
                        expenseService.createDeposit(values);
                           
                    }} >
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input 
                            name="name"
                            label="Nome Completo"
                            type="text"
                            value={values.name}
                            onChange={handleInputChange}
                        />

                        <Controls.Input
                            variant="outlined"
                            label="Responsavel"
                            name="responsible"
                            type="text"
                            value={values.responsible}
                            onChange={handleInputChange}
                        />
                                    

                        <Controls.Select
                            name="expenseType"
                            label="tipo de gasto"
                            value={values.expenseType}
                            onChange={handleInputChange}
                            options={expenseItems}
                        />


                        <Controls.Input
                            variant="outlined"
                            label="valor"
                            name="amount"
                            type="number"
                            value={values.amount}
                            onChange={handleInputChange}
                        />


                        <Controls.DatePicker
                            name="creationDate"
                            label="Data da entrada"
                            value={values.creationDate}
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

export default DepositForm;