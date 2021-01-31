import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#D3CFC6',
        },
        secondary: {
            main: '#34acac',
        },
        background: {
            default: '#202020',
            paper: '#fafafa'
        },
        text: {
            primary: '#303030'
        }
    },
});

theme = responsiveFontSizes(theme)

export default theme