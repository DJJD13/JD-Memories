import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
        setSignUp((prevSignUp) => !prevSignUp);
        handleShowPassword(false);
    }

    return (
        <Container component={'main'} maxWidth={'xs'}>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant={'h5'}>
                    {signUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { signUp && (
                        <>
                            <Input name={'firstName'} label={'First Name'} handleChange={handleChange} autoFocus half />
                            <Input name={'firstName'} label={'First Name'} handleChange={handleChange} half />
                        </>
                        )}
                        <Input name={'email'} label={'Email Address'} handleChange={handleChange} type={'email'} />
                        <Input name={'password'} label={'Password'} handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { signUp && <Input name={'confirmPassword'} label={'Repeat Password'} handleChange={handleChange} type={'password'} /> }
                    </Grid>
                    <Button type={'submit'} fullWidth variant={'contained'} color={'primary'} className={classes.submit}>
                        {signUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent={'flex-end'}>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {signUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;
