import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';

import PersonMenu from './PersonMenu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  color: 'inherit',
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            MindCan
          </Typography>
          {/* <TextButton>Courses</TextButton> */}
          <Grid container spacing={24}>
            <Grid item xs>
              <Button color="inherit" containerElement={<Link to="/dashboard" />}>Home</Button>
            </Grid>
            <Grid item xs>
              <Button color="inherit" containerElement={<Link to="/dashboard" />}>Courses</Button>
            </Grid>
            <Grid item xs>
              <Button color="inherit" >Teachers</Button>
            </Grid>
            <Grid item xs>
              <Button color="inherit" >Students</Button>
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