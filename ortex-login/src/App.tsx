import React, {useState} from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import theme from './theme/theme';
import { MuiThemeProvider, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GlobalStyles from './theme/GlobalStyles'

import LogIn from './Components/LogIn/LogIn'
import RateCard from './Components/RateCard/RateCard'
import ResetPasswordModal from './Components/ResetPasswordModal/ResetPasswordModal';

import getRate, { Rate } from './hooks/getRate'

const App: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [rate, setRate] = useState<Rate>()

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
            },
        }),
    );

    const classes = useStyles()
    
    getRate().then(value => setRate(value))

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Container component='main' className={classes.container}>
                <LogIn resetPasswordModalState={onOpenModal}/>
                <RateCard {...rate} />
                
                <ResetPasswordModal open={modalOpen} setOpen={onOpenModal} />
            </Container>
        </MuiThemeProvider>
    )
};

export default React.memo(App);