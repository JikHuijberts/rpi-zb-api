import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { List, Toolbar, Box, IconButton, Typography, AppBar, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import { Route } from "react-router";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(() => ({
  active: {
    fontWeight: "bold",
    color:"black"
  },
  noDecoration: { 
    textDecoration: 'none'
  }, 
}));
export function Navbar(){
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar/>
            <List>
              <NavLink to="/dashboard"
                activeStyle={{classes.active}}
                className={classes.noDecoration}
              >
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                      Dashboard
                  </ListItemIcon>
                  <ListItemText />
                </ListItem>
              </NavLink>
              <NavLink to="dasboard/hubs"
                activeStyle={classes.active}
                className={classes.noDecoration}
              >
                <ListItem button>
                  <ListItemIcon>
                    <RouterOutlinedIcon/>
                      Hubs
                  </ListItemIcon>
                  <ListItemText />
                </ListItem>
              </NavLink>
              <NavLink to="/dasboard/profile"
                activeStyle={classes.active}
                className={classes.noDecoration}
              >
                <ListItem button>
                  <ListItemIcon>
                    <PersonOutlineOutlinedIcon/>
                      Profile
                  </ListItemIcon>
                  <ListItemText />
                </ListItem>
              </NavLink>
            </List>
            <List>
            <ListItem button>
                  <ListItemIcon>
                    <LogoutOutlinedIcon/>
                      Logout
                  </ListItemIcon>
                  <ListItemText />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window.document.body : undefined;
    return (
      <>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <HomeIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Responsive drawer
                </Typography>
            </Toolbar>
        </AppBar>
        <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </>
    )
}
