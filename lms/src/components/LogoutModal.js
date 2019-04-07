import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import green from '@material-ui/core/colors/green';
import CircularIntergration from './CircularIntergration';

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
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing.unit,
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
});

class LogoutModal extends React.Component {
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


  handleLoginSubmit = ({ email, password }) => {
    this.props.Login({
      email,
      password,
    });
  };

  handleSignupSubmit = ({ email, password, phone, verifycode, }) => {
    this.props.SignupRequest({
      email,
      password,
      phone,
      verifycode
    })
  }

  render() {
    const { classes, open, data } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
        <CircularIntergration></CircularIntergration>
          </div>
        </Modal>
      </div>
    );
  }
}

LogoutModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const LogoutModalWrapped = withStyles(styles)(LogoutModal);

export default connect(({ user }) => ({ user }), {

})(LogoutModalWrapped);
// export default connect(LoginModalWrapped;