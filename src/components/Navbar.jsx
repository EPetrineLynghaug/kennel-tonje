import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"   sx={{ backgroundColor: "#C8C6C0", padding: "1rem" }} className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        {/* Logo/Tittel */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className={styles.logo}
        >
          Tonje Kennelen
        </Typography>

        {/* Desktop: Standard navigasjonsmeny */}
        <Box className={styles.desktopNav}>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Hjem</Link>
            </li>
            <li>
              <Link to="/hunder">Våre Hunder</Link>
            </li>
            <li>
              <Link to="/omoss">Om Oss</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </Box>

        {/* Mobil: Hamburger-ikon */}
        <IconButton
          edge="end"
          color="black"
          aria-label="toggle menu"
          onClick={handleMenuClick}
          className={styles.mobileMenuButton}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobil: Dropdown-meny */}
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem component={Link} to="/" onClick={handleClose}>
            Hjem
          </MenuItem>
          <MenuItem component={Link} to="/hunder" onClick={handleClose}>
            Våre Hunder
          </MenuItem>
          <MenuItem component={Link} to="/omoss" onClick={handleClose}>
            Om Oss
          </MenuItem>
          <MenuItem component={Link} to="/kontakt" onClick={handleClose}>
            Kontakt
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
