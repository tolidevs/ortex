import React, {useState} from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import theme from './theme/theme';
import { MuiThemeProvider, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GlobalStyles from './theme/GlobalStyles'

import LogIn from './Components/LogIn/LogIn'
import ResetPasswordModal from './Components/ResetPasswordModal/ResetPasswordModal';

const App: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const onOpenModal = () => setModalOpen(!modalOpen)

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            container: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%'
            }
        }),
    );

    const classes = useStyles()

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Container component='main' className={classes.container}>
                <LogIn resetPasswordModalState={onOpenModal}/>
                <ResetPasswordModal open={modalOpen} setOpen={setModalOpen} />
            </Container>
        </MuiThemeProvider>
    )
};

export default App;