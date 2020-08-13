import React from 'react';
import { Container, FormControl, InputLabel, Input, Grid, Button } from '@material-ui/core';

class Login extends React.Component{
    test(event) {

      fetch("http://localhost:3002/login")
        .then(response => response.json())
        .then(data => console.log(data));
        
        event.preventDefault()
    }
    
    render() {
        return (
            <Container maxWidth="sm">

                <form onSubmit={this.test}>
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
                                <Input id="password"/>
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
