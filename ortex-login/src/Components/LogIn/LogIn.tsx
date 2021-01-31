import React from 'react'

import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CheckBox from '../CheckBox/CheckBox'

import ortex_logo from '../../Images/ortex_logo.png'

export interface ILogInProps {
    resetPasswordModalState: () => void
}

const LogIn: React.FC<ILogInProps> = (props) => {
    const { resetPasswordModalState } = props
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            loginBox: {
                flexDirection: 'column',
                width: 'max-content',
                textAlign: 'center'
            },
            loginContainer: {
                width: 'max-content',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: theme.spacing(4, 5),
                borderRadius: '10px',
                flexWrap: 'nowrap',
                background: theme.palette.background.paper
            },
            logo: {
                maxWidth: '90%',
                marginBottom: theme.spacing(2)
            },
            form: {
                width: '100%',
                padding: theme.spacing(0, 1)
            },
            row: {
                textAlign: 'center',
            },
            checkboxRow: {
                textAlign: 'left',
            },
            button: {
                color: 'white',
                fontWeight: 'bold',
                margin: theme.spacing(1, 0)
            },
        }),
    );

    const classes = useStyles()

    return(
        <Grid className={classes.loginContainer} container spacing={2}>
            <Grid className={classes.loginBox} item>
                <Grid className={classes.row} item xs={12}>
                    <img className={classes.logo} src={ortex_logo} alt='Ortex Logo' />
                </Grid>
                <Grid className={classes.row} item xs={12}>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                </Grid>
                <form className={classes.form}>
                    <Grid className={classes.row} item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="email"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                        />
                    </Grid>
                    <Grid className={classes.row} item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                    </Grid>
                    <Grid className={classes.checkboxRow} item xs={12}>
                        <CheckBox label="Remember me" />
                    </Grid>
                    <Grid className={classes.row} item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            size="large"
                            className={classes.button}
                        >
                            Sign In
                        </Button>
                    </Grid>
                    <Grid className={classes.row} item xs={12}>
                        <Typography variant='body2' role='link' onClick={resetPasswordModalState}>
                            Reset Password
                        </Typography>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default LogIn