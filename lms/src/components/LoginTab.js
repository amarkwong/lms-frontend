import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';


import {
  getCurrentUserRequest,
  createUserRequest,
} from '../actions/users'

function TabContainer({ children, dir }) {
  return (
    // <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    // <Typography component="div" dir={dir} >
      {children}
    // </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500, 
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleGetCurrentUserSubmit = ({ email, password }) => {
    this.props.getCurrentUser({
      email,
      password,
    });
  };

  handleCreateUserSubmit = ({ email, password, phone, verifycode, }) => {
    console.log('Tab create user fired');
    console.log(email,password,phone,verifycode);
    console.log(this.props.createUserRequest);
    this.props.createUserRequest({
      email,
      password,
      phone,
      verifycode
    })
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Login" />
            <Tab label="Sign up" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
        <LoginForm mode='login' onSubmit={this.handleGetCurrentUserSubmit}></LoginForm>
        <LoginForm mode='signup' onSubmit={this.handleCreateUserSubmit}></LoginForm>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect(({ user }) => ({ user }), {
  getCurrentUserRequest,
  createUserRequest,
})(withStyles(styles, { withTheme: true })(FullWidthTabs));