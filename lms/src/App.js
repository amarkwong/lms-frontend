import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { AccessAlarm, ThreeDRotation, User } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
// import { CourseCard,SimpleModalWrapped } from './components';
import CourseCard from './components/CourseCard';
import CourseModal from './components/CourseModal';
import NavBar from './components/NavBar';
import Course from './pages/Course';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import 'typeface-roboto';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'flex-',
    color: theme.palette.text.secondary,
  },
});


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <NavBar className="App-Navbar"></NavBar>
        <Grid container spacing={24}>
          <Grid item xs={11} >
            <Course></Course>
          </Grid>
          <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
