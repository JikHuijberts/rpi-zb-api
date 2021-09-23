import { Grid, List, Card, CardContent, Toolbar, Box, IconButton, Typography, AppBar, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import React from 'react';
import { Navbar } from '../../features/navbar/NavBar';

export function Dashboard(){
    return (
        <Box sx={{ display: 'flex'}}>
            <Navbar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar/>
                <div>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <h1>Online</h1>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <h1>Active</h1>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <h1>Alarm!</h1>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <h1>Errors</h1>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <h3>
                                second card row
                            </h3>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </Box>
        )
}