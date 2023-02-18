import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import DatabaseContainer from './DatabaseContainer';



function MainContainer() {

  return (
    <Grid container>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            App bar
          </Typography>
        </Toolbar>
      </AppBar>

      <DatabaseContainer />
    </Grid>
  );
}
export default MainContainer;
