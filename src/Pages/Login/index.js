import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, AppBar, Toolbar, Link, Typography } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
const styles = theme => ({

    loginForm: {
        justifyContent: "center",
        minHeight: "90vh",
    },
    buttonBlock: {
        width: "100%"
    },
    loginBackground: {
        justifyContent: "center",
        minHeight: "30vh",
        padding: "50px",
    }

});


class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", authflag: 1 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event) {
        this.setState({ username: event.state.username, password: event.state.password });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username == 'rodrigo@gmail.com' && this.state.password == 'rodrigo') {
            this.props.history.push("/home");
        } else {
            alert('Incorrect Credntials!');
        }
    }

    render() {
        return (
            <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">OLA</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Grid container spacing={0} justify="center" direction="row" alignItems="center">
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            alignItems="center"
                        >
                       
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="username"
                                                    variant="outlined"
                                                    value={this.state.username}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value,
                                                        })
                                                    }
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    value={this.state.password}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className={styles.buttonBlock}
                                                >
                                                    Submit
                                                    </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Forgot Password?
                                    </Link>
                                </Grid>
                     
                        </Grid>
                    </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(Login);