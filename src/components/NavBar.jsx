import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HelpIcon from '@mui/icons-material/Help';
import ErrorIcon from '@mui/icons-material/Error';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        
       <IconButton size="large" color="inherit">
              <Badge>
                <HomeIcon sx={{fontSize:'35px'}}/>
              </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
              <Badge>
                <TravelExploreIcon sx={{fontSize:'35px'}}/>
              </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
              <Badge>
                <HelpIcon sx={{fontSize:'35px'}}/>
              </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
              <Badge color="error">
                <ErrorIcon sx={{fontSize:'35px'}}/>
              </Badge>
          </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon sx={{fontSize:'35px'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{fontSize:'40px'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{fontSize:'40px'}}/>
            </IconButton>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{fontSize:'40px'}}/>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white',color:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img src="/assets/images/logo-64x64.png" alt="" style={{marginRight:'4px',borderRadius:'100%'}} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            StartHub
          </Typography>
          <Search style={{border:'1px solid grey',width:'460px',borderRadius:"40px"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' },gap:'30px' }}>
          <IconButton size="large" color="inherit" sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
              <Badge sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <HomeIcon sx={{fontSize:'40px'}}/>
                <h6 style={{fontSize:'14px',fontWeight:'700'}}>Home</h6>
              </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
              <Badge sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <TravelExploreIcon sx={{fontSize:'40px'}}/>
                <h6 style={{fontSize:'14px',fontWeight:'700'}}>Find Mentors</h6>
              </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
              <Badge sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <HelpIcon sx={{fontSize:'40px'}}/>
                <h6 style={{fontSize:'14px',fontWeight:'700'}}>Search Help</h6>
              </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
              <Badge color="error" sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <ErrorIcon sx={{fontSize:'40px'}}/>
                <h6 style={{fontSize:'14px',fontWeight:'700'}}>Report Error</h6>
              </Badge>
          </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error" sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center' ,
    '& .MuiBadge-badge': {
      backgroundColor: 'rgb(41,125,246)',
    }}}>
                <MailIcon sx={{fontSize:'40px'}}/>
                <h6 style={{fontSize:'14px',fontWeight:'700'}}>Messages</h6>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error" sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',textAlign:'center' ,
    '& .MuiBadge-badge': {
      backgroundColor: 'rgb(41,125,246)',
    }}}>
                <NotificationsIcon sx={{fontSize:'40px'}}/>
                <h6 style={{fontSize:'14px',fontWeight:'700'}}>Notifications</h6>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{display:'flex',flexDirection:'column'}}
            >
              <AccountCircle sx={{fontSize:'40px'}}/>
              <h6 style={{fontSize:'14px',fontWeight:'700'}}>Account</h6>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
