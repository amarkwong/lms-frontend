import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import CourseForm from './CourseForm';
import {
  getCoursesRequest,
  createCourseRequest,
  updateCourseRequest,
  deleteCourseRequest,
  coursesError
} from '../actions/courses'

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

class CourseModal extends React.Component {
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

  handleCreateCourseSubmit = ({ name, description, price, maxStudents, availableSeats, imageRef }) => {
    this.props.createCourseRequest({
      name,
      description,
      price,
      maxStudents,
      availableSeats,
      imageRef
    });
  };

  handleUpdateCourseSubmit = ({ name, description, price, maxStudents, availableSeats, imageRef }) => {
    const id=this.props.data.ID;
    this.props.updateCourseRequest({
      id, 
      name,
      description,
      price,
      maxStudents,
      availableSeats,
      imageRef
    })
  }

  handleDeleteCourseSubmit = ({ name, description, price, maxStudents, availableSeats, imageRef }) => {
    const id=this.props.data.ID;
    this.props.deleteCourseRequest({
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
            <CourseForm modalType={modalType} data={data}
              onSubmit={modalType === 'add' ?
                this.handleCreateCourseSubmit :
                modalType === 'edit' ?
                this.handleUpdateCourseSubmit :
                this.handleDeleteCourseSubmit}>
            </CourseForm>
            {/* <CourseModalWrapped /> */}
          </div>
        </Modal>
      </div>
    );
  }
}

CourseModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const CourseModalWrapped = withStyles(styles)(CourseModal);

export default connect(({ courses }) => ({ courses }), {
  createCourseRequest,
  updateCourseRequest,
  deleteCourseRequest,
})(CourseModalWrapped);
// export default connect(CourseModalWrapped;