import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import LoginForm from './LoginForm';
import LoginTab from './LoginTab';
import {
} from '../actions/courses'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
//   const top = 50 + rand();
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: this.props.data,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };


  handleLoginSubmit = ({ username, password }) => {
    this.props.Login({
       username,
      password,
    });
    // this.handleClose();
  };

  handleSignupSubmit = ({ username, email, password, phone, verifycode, }) => {
    console.log('MODAL signup fired');
    this.props.SignupRequest({
      username,
      email,
      password,
      phone,
      verifycode
    })
    this.handleClose();
  }

  render() {
    const { classes, open, data } = this.props;
    console.log('MODAL open',open);
    console.log('MODAL props',this.props);

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          <LoginTab onClose={this.handleClose}></LoginTab>
          </div>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const LoginModalWrapped = withStyles(styles)(LoginModal);

export default connect(({ user }) => ({ user }), {

})(LoginModalWrapped);
// export default connect(LoginModalWrapped;