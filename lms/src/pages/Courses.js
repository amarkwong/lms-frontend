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
    coursesError
} from '../actions/courses';
import { getCurrentUserRequest } from '../actions/users';

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
    constructor(props) {
        super(props);
        // state = {
        //     curUser: this.props.getCurrentUserRequest(),
        // }
        // const curUser = this.props.getCurrentUserRequest();
        this.props.getCoursesRequest();
    }

    render() {
        const courses = this.props.courses.items;
        const mode = this.props.courses.mode;
        const curUser = this.props.getCurrentUserRequest();

        console.log('page user',this.props);
        // const { curUser } = this.state;

        if (curUser.role === 'Guest') {
            return (
                <div>
                    <h2>Please login to see this page</h2>
                </div>
            );
        } else {
            return (
                <div>
                    <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" >
                        {courses.slice(0, courses.length).map(course => (
                            <CourseCard key={course.ID} mode={mode} data={course} />))}
                    </Grid>
                   {curUser.role === 'Admin' ?
                   <AdminMenu page='Course'></AdminMenu>
                   :null
                   }
                </div>
            );
        }
    }
}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(({ courses,}) => ({ courses,}), {
    getCoursesRequest,
    createCourseRequest,
    updateCourseRequest,
    deleteCourseRequest,
    coursesError,
    getMode,
    getCurrentUserRequest,
})(withStyles(styles)(Course))