import {TextField, Button, Grid, Link, Box, Typography, Avatar} from '@material-ui/core'
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { API_URL } from "../../constants";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


interface ISignInInput {
    email: string;
    password: string;
}
export function Copyright(){
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

export default function SignIn(props:SignInProps){
    const { register, formState:{errors}, handleSubmit} = useForm();
    // const onSubmit = data => props.updateAction(data)

    const onSubmit:SubmitHandler<ISignInInput> = async data => {
        console.log(data)
        const enEmail = encodeURIComponent(data.email)
        const enPassword = encodeURIComponent(data.password)
        const response = await fetch(API_URL + `?email="${enEmail}"&password="${enPassword}"`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
    return (
        <div className={props.classes.paper}>
            <Avatar className={props.classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className={props.classes.invalid}>{(errors.email || errors.password) && "Invalid email/password combination"}</p>
                <TextField
                    {...register("email", {
                        required:true,
                        pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        }
                    )}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    {...register("password")}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={props.classes.submit}
                >
                Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        {/* <Link href="#" variant="body2">
                        Forgot password?
                        </Link> */}
                    </Grid>
                    <Grid item>
                        <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </form>
        </div>
    )
}

type SignInProps = {
    classes: ClassNameMap
}