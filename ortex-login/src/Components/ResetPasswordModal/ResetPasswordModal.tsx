import React, { useState } from 'react'
import { Modal, Grid, TextField, Button, IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

export interface IResetPasswordModalProps {
    open: boolean,
    setOpen: () => void
}

const ResetPasswordModal: React.FC<IResetPasswordModalProps> = (props) => {
    const { open, setOpen } = props

    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            modal: {
                outline: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                [theme.breakpoints.down('sm')]: {
                    padding: theme.spacing(2),
                  }
            },
            modalContainer: {
                border: '2px solid',
                borderColor: theme.palette.secondary.main,
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: theme.spacing(4, 5),
                borderRadius: '10px',
                flexWrap: 'nowrap',
                background: theme.palette.background.paper,
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                    padding: theme.spacing(3,2),
                  }
            },
            modalBox: {
                flexDirection: 'column',
                width: '100%',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                    width: '100%'
                }
            },
            form: {
                width: '100%',
                padding: theme.spacing(0, 1)
            },
            row: {
                textAlign: 'center',
            },
            closeRow: {
                width: '100%',
                textAlign: 'right',
                margin: '-16px',
                marginBottom: theme.spacing(1)
            },
            button: {
                color: 'white',
                fontWeight: 'bold',
                margin: theme.spacing(1, 0)
            },
        }),
    );
    const classes = useStyles()
    
    const passwordsMatch = newPassword === confirmPassword

    return(
        <Modal 
            open={open}
            onClose={setOpen}
            className={classes.modal}
        >
            <Grid className={classes.modalContainer} container>
                <Grid className={classes.closeRow} item>
                    <IconButton onClick={setOpen}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
                <Grid className={classes.modalBox} item>
                    <form className={classes.form}>
                        <Grid className='row' item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type='email'
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
                                name="new-password"
                                label="New Password"
                                type="password"
                                id="new-password"
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid className={classes.row} item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="confirm-password"
                                label="Confirm New Password"
                                type="password"
                                id="confirm-password"
                                onChange={e => setConfirmPassword(e.target.value)}
                                error={!passwordsMatch}
                            />
                        </Grid>
                        <Grid className={classes.row} item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                size="large"
                                className={classes.button}
                                disabled={!passwordsMatch}
                            >
                                Reset Password
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default ResetPasswordModal