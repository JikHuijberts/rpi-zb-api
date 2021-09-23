import React, {Component, useState} from 'react';
import {TextField, Button, Grid, Link, Box, Input, Typography, TextFieldProps, Avatar} from '@material-ui/core'
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DateAdapter  from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { signUpAsync, loginSelector } from '../login/loginSlice';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
interface IRegisterProps{
    classes: ClassNameMap
}

export default function Register(props:IRegisterProps){
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date("1990-02-11")); 
    const { register, formState:{errors}, handleSubmit} = useForm();
    const onSubmit:SubmitHandler<any> = async data => {
        dispatch(signUpAsync(data))
    }
    const {isFetching, isSuccess, isError, errorMessage} = useSelector(
        loginSelector
    )
    return(
        <div className={props.classes.paper}>
            <Avatar className={props.classes.avatar}>
                <PersonAddOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Create Account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        {...register("firstName", {
                            required:true,
                            minLength:2
                        }
                        )}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                        name="firstName"
                        label="firstName"
                        type="text"
                        id="firstName"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        {...register("lastName",{
                            required: true,
                            minLength:2
                            }
                        )}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="lastName"
                        label="Last name"
                        type="text"
                        id="lastName"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        {...register("infix"
                        )}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        name="infix"
                        label="infix"
                        type="text"
                        id="infix"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <DatePicker
                        inputFormat="dd-mm-yyyy"
                        mask="__-__-____"
                        label="Birthdate"
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                        renderInput={(props:any) => <TextField 
                            {...props}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            {...register("birthdate")}
                            />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <TextField
                {...register("email", {
                    required:true,
                    pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    }
                )}
                variant="outlined"
                margin="normal"
                required
                id="email"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
            />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        {...register("password", {
                            required:true,
                            pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        }
                        )}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        {...register("rPassword")}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="rPassword"
                        label="Repeat password"
                        type="password"
                        id="rPassword"
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={props.classes.submit}
            >
            Create an account
            </Button>
            <Grid container>
                <Grid item>
                    <Link href="/" variant="body2">
                        {"Return to login"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    </div>
    )
}
