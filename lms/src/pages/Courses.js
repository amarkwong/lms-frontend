import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import CourseCard from '../components/CourseCard';
import AdminMenu from '../components/AdminMenu';
import { connect } from 'react-redux';
import { 
    getCoursesRequest, 
    createCourseRequest, 
    updateCourseRequest, 
    deleteCourseRequest, 
    getMode,
    coursesError } from '../actions/courses';


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

class Course extends React.Component {
    constructor(props){
        super(props);
        this.props.getCoursesRequest();
    }
    render() {
        const courses = this.props.courses.items;
        const mode = this.props.courses.mode;
        return (
            <div>
            <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" >
            {courses.slice(0,courses.length).map(course => (
                    <CourseCard key={course.ID} mode={mode} data={course}/>))}
                    {/* <CourseCard ImageRef="https://i.imgur.com/Ld4fkyJ.jpg" mode='edit'></CourseCard> */}
                    {/* <CourseCard ImageRef="https://i.imgur.com/Ld4fkyJ.jpg" mode='delete'></CourseCard> */}
            </Grid>
            <AdminMenu page='Course'></AdminMenu>
            </div>
        );
    }
}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(({courses}) => ({courses}), {
    getCoursesRequest,
    createCourseRequest,
    updateCourseRequest,
    deleteCourseRequest,
    coursesError,
    getMode,
    })(withStyles(styles)(Course))