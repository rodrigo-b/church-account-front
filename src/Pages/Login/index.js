import React from 'react';
import { Container, FormControl, Grid, Button } from '@material-ui/core';
import { Form, Field } from 'react-final-form'
import { Text } from '../../components/Input'
import { required, minLength, email, composeValidators } from '../../validators'


class Login extends React.Component{
    handleLogin(values) {
      console.log(values)
      fetch("http://localhost:3002/login",{
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => console.log(data));
        
    }
    
    render() {
        return (
            <Container maxWidth="sm">

                <Form
                    onSubmit={this.handleLogin}
                    render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}  align="center">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl>
                                <Field
                                    name="email"
                                    label="Email"
                                    component={Text}
                                    validate={composeValidators(required, email)}
                                    type="text"
                                />
                            </FormControl>
                        </Grid>            

                        <Grid item xs={12}>
                            <FormControl>
                                <Field
                                    name="password"
                                    label="Password"
                                    component={Text}
                                    validate={composeValidators(required, minLength(8))}
                                    type="password"
                                />
                            </FormControl>
                        </Grid> 

                        <Grid item xs={12}>
                            <Button type="submit" disabled={submitting}>
                                Log in
                            </Button>
                        </Grid>

                    </Grid>
                </form>
                )}
                />
            </Container>
      );
    }
}

export default Login;
