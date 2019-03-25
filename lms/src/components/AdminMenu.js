import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import { setMode } from '../actions/courses';


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
        mode: '',
    };

    handleChange = (event, value) => {
        this.setState({ value });

    };

    editMode = () => {
        this.props.setMode('edit');
        // this.setState({mode:'edit' });
    };

    addMode = () => {
        this.props.setMode('add');
        // this.setState({mode:'add' });
        return (
            <CourseModal modalType='add' value="add"></CourseModal>
        )
    };

    deleteMode = () => {
        this.props.setMode('delete');
        // this.setState({mode:'delete' });
    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" >
                <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                    <BottomNavigationAction label="Edit Mode" value="Edit" onClick={this.editMode} icon={<EditIcon />} />
                    {/* <BottomNavigationAction label="Add Mode" value="Add" onClick={this.addMode} icon={<AddIcon />} /> */}
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


    
export default connect(({courses}) => ({courses}), {
    setMode})(
    withStyles(styles)(LabelBottomNavigation));