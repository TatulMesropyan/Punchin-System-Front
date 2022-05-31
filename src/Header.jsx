import {MenuItem,Toolbar,Tooltip,Menu,IconButton,Typography,Container,Button,AppBar,Box,Avatar} from '@mui/material';
import React, { useState } from "react";
import "./App.css"
import steelerlogo from './Static/steelerlogo.png'
const Header = () => {
  const pages = {Dashboard:'Dashboard', Punchin:'Punchin', Blog:'Blog'};
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDashboardCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleBlogCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handlePunchinCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
        <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img alt="Steelers" src={steelerlogo} width="70px" height="70px"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <MenuItem key={pages.Dashboard} onClick={handleDashboardCloseNavMenu}>
                  <Typography textAlign="center">{pages.Dashboard}</Typography>
                </MenuItem>
                <MenuItem key={pages.Punchin} onClick={handlePunchinCloseNavMenu}>
                  <Typography textAlign="center">{pages.Blog}</Typography>
                </MenuItem>
                <MenuItem key={pages.Blog} onClick={handleBlogCloseNavMenu}>
                  <Typography textAlign="center">{pages.Blog}</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key={pages.Dashboard}
                onClick={handleDashboardCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages.Dashboard}
              </Button>
              <Button
                key={pages.Punchin}
                onClick={handlePunchinCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages.Punchin}
              </Button>
              <Button
                key={pages.Blog}
                onClick={handleBlogCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages.Blog}
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



export default Header;
