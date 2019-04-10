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
  loginRequest,
  signupRequest,
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

  handleClose = () =>
  {
    // console.log(this.props);
    this.props.onClose()
  }

  handleLoginSubmit = ({ username, password }) => {
    this.props.loginRequest({
      username,
      password,
    });
    // this.props.open = false;
  };

  handleSignupSubmit = ({ username, email, password, phone, verifycode, }) => {
    this.props.signupRequest({
      username,
      email,
      password,
      phone,
      verifycode
    })
    // this.props.handleClose();
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
        <LoginForm mode='login' onSubmit={this.handleLoginSubmit} onClose={this.handleClose}></LoginForm>
        <LoginForm mode='signup' onSubmit={this.handleSignupSubmit} onClose={this.handleClose}></LoginForm>
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
  loginRequest,
  getCurrentUserRequest,
  signupRequest,
})(withStyles(styles, { withTheme: true })(FullWidthTabs));