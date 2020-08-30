import React from 'react';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import { Grid } from '@material-ui/core';

function DepositForm(){

    
    function handleChange(event) {
        
           console.log('teste')
    }

    return (
        <PageDefault>
            <h1 align="center">
                Entrada
            </h1>

            
            <form align="center">
                
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormField
                        label="Nome"
                        type="text"
                        name="nome"
                        onChange={handleChange}
                        />
                </Grid>


        
            </Grid>

            </form>
        </PageDefault>
    );

}

export default DepositForm;