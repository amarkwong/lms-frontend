import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import LoginModal from './LoginModal';
import LoginTab from './LoginTab';
import { connect } from 'react-redux';

import {
  loginRequest,
  getCurrentUserRequest,
  signupRequest,
} from '../actions/users';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class PersonMenu extends React.Component {
  state = {
    anchorEl: null,
    showLogin: false,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null,showLogin: false });
  };

  handleLogin = () => {
    this.setState({ anchorEl:null,
      showLogin: true});
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
            <PersonIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >}
          <MenuItem onClick={this.handleLogin}>Login/Signup</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      {/* {this.state.showLogin && <LoginModal open={this.state.showLogin} onClose={this.state.handleClose}></LoginModal>} */}
      {/* {this.state.showLogin && <LoginModal open={this.state.showLogin} onClo></LoginModal>} */}
        {/* <LoginModal open={this.state.showLogin}/> */}
        {/* <LoginTab></LoginTab> */}
      </div>
    );
  }
}

PersonMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(({ user }) => ({ user }), {
  loginRequest,
  getCurrentUserRequest,
  signupRequest,
})(withStyles(styles)(PersonMenu));