import { makeStyles } from '@material-ui/core/styles';
import backgroundMaxxidata from '../../img/background.png';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${backgroundMaxxidata})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ?
            theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'green',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        color: 'green'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {

        margin: theme.spacing(3, 0, 2),
        //
        backgroundColor: 'green',
        color: theme.palette.error.contrastText,
        "&:hover": {
            backgroundColor: '#a5d6a7',
            color: 'green'
        },
        //
    },
}));

const logLocal = styled.div`
  padding-top: 50%;

`;