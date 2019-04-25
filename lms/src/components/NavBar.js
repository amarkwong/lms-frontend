import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import teal from '@material-ui/core/colors/teal';

import PersonMenu from './PersonMenu';

const styles = {
  root: {
    flexGrow: 1,
  //   color: teal[200],
  // backgroundColor: teal[200],
  },
  grow: {
    flexGrow: 1,
  },
  palette: {
    primary: teal[800],
  },
  color: 'inherit',
  // color: teal[200],
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#2bbbad'}} >
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            MindCan
          </Typography>
          {/* <TextButton>Courses</TextButton> */}
          <Grid container spacing={24}>
            {/* <Grid item xs>
              <Button color="inherit" href="/">Home</Button>
            </Grid> */}
            <Grid item xs>
              <Button color="inherit" href="/courses">Courses</Button>
            </Grid>
            <Grid item xs>
              <Button color="inherit" href="/teachers">Teachers</Button>
            </Grid>
            <Grid item xs>
              <Button color="inherit" href="/students">Students</Button>
            </Grid>
          </Grid>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <PersonIcon />
          </IconButton> */}
          <PersonMenu></PersonMenu>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);