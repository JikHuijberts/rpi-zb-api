import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { List, Toolbar, Box, IconButton, Typography, AppBar, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import { Route } from "react-router";
const drawerWidth = 240;

export function Navbar(){
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar/>
            <List>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                      Dashboard
                  </ListItemIcon>
                  <ListItemText />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                      Hubs
                  </ListItemIcon>
                  <ListItemText />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
                      Profile
                  </ListItemIcon>
                  <ListItemText />
                </ListItem>
            </List>
            <List>
            <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon/>
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
