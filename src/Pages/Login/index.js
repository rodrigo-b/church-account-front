import React from 'react';
import { Container, FormControl, InputLabel, Input, Grid, Button } from '@material-ui/core';

class Login extends React.Component{
    handleLogin(event) {
      fetch("http://localhost:3002/login",{
        method: "POST",
        body: JSON.stringify({"email": event.target.email.value,
                             "password": event.target.password.value}),
        headers: {
            "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => console.log(data));
        
        event.preventDefault()
    }
    
    render() {
        return (
            <Container maxWidth="sm">

                <form onSubmit={this.handleLogin}  align="center">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email"/>
                            </FormControl>
                        </Grid>            

                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password"/>
                            </FormControl>
                        </Grid> 

                        <Grid item xs={12}>
                            <Button type="submit">
                                Log in
                            </Button>
                        </Grid>

                    </Grid>
                </form>

            </Container>
      );
    }
}

export default Login;
