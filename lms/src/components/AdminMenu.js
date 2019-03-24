import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import CourseModal from './CourseModal';

const styles = {
    root: {
        width: 500,
    },
};

class LabelBottomNavigation extends React.Component {
    state = {
        // value: 'Edit',
        value: '',
    };

    handleChange = (event, value) => {
        this.setState({ value });

    };

    editMode = () => {
       console.log('EDIT MODE') ;
    };

    addMode = () => {
       console.log('add MODE') ;
    };

    deleteMode = () => {
       console.log('delete MODE') ;
    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" >
                <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                    <BottomNavigationAction label="Edit Mode" value="Edit" onClick={this.editMode} icon={<EditIcon />} />
                    <CourseModal modalType='add' value="add"></CourseModal>
                    <BottomNavigationAction label="Delete Mode" value="Delete" onClick={this.deleteMode} icon={<DeleteIcon />} />
                </BottomNavigation>
            </Grid>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);