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


import slider1 from '../images/slider-1.jpg';
const styles = {
    // backgroundImag: slider1,
        // backgroundImage:  `url('${slider1}')`,
    root: {
        // backgroundImage:  `url('${slider1}')`,
        // backgroundImage: slider1,
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
        this.props.getCurrentUserRequest();
    }

    render() {
        const courses = this.props.courses.items;
        const mode = this.props.courses.mode;
        // const curUser = this.props.users;
        const courseStyle = {backgroundImage:  `url('${slider1}')`}

        // console.log('page user', curUser);
        // const { curUser } = this.state;
        const curUser = this.props.user.user;
        console.log('page user', curUser);

        if (curUser.role === 'guest') {
            return (
                <div>
                    <h2>Please login to see this page</h2>
                </div>
            );
        } else {
            return (
                <div>
                    <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" style={courseStyle}>
                    {/* <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" > */}
                        {courses.slice(0, courses.length).map(course => (
                            <CourseCard key={course.ID} mode={mode} data={course} />))}
                    </Grid>
                    {curUser.role === 'admin' ?
                        <AdminMenu page='Course'></AdminMenu>
                        : null
                    }
                </div>
            );
        }
    }
}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(({ courses,user }) => ({ courses,user }), {
    getCoursesRequest,
    createCourseRequest,
    updateCourseRequest,
    deleteCourseRequest,
    coursesError,
    getMode,
    getCurrentUserRequest,
})(withStyles(styles)(Course))