import Link from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../../features/signIn/SignIn';
import Register from '../../features/register/register';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: "linear-gradient(45deg,#1701eb, #31d1b3)",
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        color: "white",
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    invalid: {
        color: 'red',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/JikHuijberts">
                Security systems inc. co.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
export function HomePage() {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} alignItems="center" justifyContent="center" className={classes.image}>
                <Typography variant="h1">Better Safe <br /> Than sorry </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Switch>
                        <Route path="/register">
                            <Register classes={classes} />
                        </Route>
                        <Route exact path="/">
                            <SignIn classes={classes}/>
                        </Route>
                    </Switch>
                </div>
            </Grid>
        </Grid>
    );
}