import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Login from './pages/Login';
import Students from './pages/Students.js';
import Teachers from './pages/Teachers';
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
    // const { classes } = this.props;
    return (
      <div className="App">
        <NavBar className="App-Navbar"></NavBar>
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/courses' exact component={Courses} />
            <Route path='/students' exact component={Students} />
            <Route path='Teachers' exact component={Teachers} />
          </Switch>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
