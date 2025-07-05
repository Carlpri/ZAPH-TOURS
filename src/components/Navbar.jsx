import { AppBar, Toolbar, Typography, Stack, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  color: 'white',
  textDecoration: 'none',
  borderBottom: isActive ? '2px solid white' : 'none',
});

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'brown' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" fontWeight="bold">
          ZAPH TOURS
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link component={NavLink} to="/" sx={linkStyle}>
            HOME
          </Link>
          <Link component={NavLink} to="/tripTypes" sx={linkStyle}>
            TRIP TYPES
          </Link>
          <Link component={NavLink} to="/destination" sx={linkStyle}>
            DESTINATION
          </Link>
          <Link component={NavLink} to="/contact" sx={linkStyle}>
            CONTACT US
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
