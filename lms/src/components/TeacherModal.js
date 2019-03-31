import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import TeacherForm from './TeacherForm';
import {
  getTeachersRequest,
  createTeacherRequest,
  updateTeacherRequest,
  deleteTeacherRequest,
  teachersError
} from '../actions/teachers'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
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

class TeacherModal extends React.Component {
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
  };

  handleCreateTeacherSubmit = ({ name, description, price, maxStudents, availableSeats, imageRef }) => {
    console.log('TEACHER MODAL FIRED');
    this.props.createTeacherRequest({
      name,
      description,
      price,
      maxStudents,
      availableSeats,
      imageRef
    });
  };

  handleUpdateTeacherSubmit = ({ name, description, price, maxStudents, availableSeats, imageRef }) => {
    const id=this.props.data.ID;
    this.props.updateTeacherRequest({
      id, 
      name,
      description,
      price,
      maxStudents,
      availableSeats,
      imageRef
    })
  }

  handleDeleteTeacherSubmit = ({ name, description, price, maxStudents, availableSeats, imageRef }) => {
    const id=this.props.data.ID;
    this.props.deleteTeacherRequest({
      id, 
      name,
      description,
      price,
      maxStudents,
      availableSeats,
      imageRef
    })
  }

  render() {
    const { classes, modalType, data } = this.props;
    console.log("Modal", modalType);
    // console.log("Modal",modalType);

    return (
      <div>
        {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography> */}
        {modalType === 'add' ?
          <IconButton onClick={this.handleOpen}><AddIcon /></IconButton>
          :
          modalType === 'edit' ?
            <IconButton onClick={this.handleOpen}><EditIcon /></IconButton>
            :
            <IconButton onClick={this.handleOpen}><DeleteIcon /></IconButton>
        }
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <TeacherForm modalType={modalType} data={data}
              onSubmit={modalType === 'add' ?
                this.handleCreateTeacherSubmit :
                modalType === 'edit' ?
                this.handleUpdateTeacherSubmit :
                this.handleDeleteTeacherSubmit}>
            </TeacherForm>
            {/* <TeacherModalWrapped /> */}
          </div>
        </Modal>
      </div>
    );
  }
}

TeacherModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const TeacherModalWrapped = withStyles(styles)(TeacherModal);

export default connect(({ teachers }) => ({ teachers }), {
  createTeacherRequest,
  updateTeacherRequest,
  deleteTeacherRequest,
})(TeacherModalWrapped);
// export default connect(TeacherModalWrapped;