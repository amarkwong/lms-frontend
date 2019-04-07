import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TeacherCard from '../components/TeacherCard';
import AdminMenu from '../components/AdminMenu';
import { connect } from 'react-redux';
import { 
    getTeachersRequest, 
    createTeacherRequest, 
    updateTeacherRequest, 
    deleteTeacherRequest, 
    getMode,
    teachersError } from '../actions/teachers';
import slider2 from '../images/slider-2.jpg';

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
        const teacherStyle = {backgroundImage:  `url('${slider2}')`};

class Teacher extends React.Component {
    constructor(props){
        super(props);
        this.props.getTeachersRequest();
    }
    render() {
        const teachers = this.props.teachers.items;
        const mode = this.props.teachers.mode;
        console.log('teacher page',teachers, mode);
        return (
            <div>
            <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" style={teacherStyle}>
            {teachers.slice(0,teachers.length).map(teacher => (
                    <TeacherCard key={teacher.ID} mode={mode} data={teacher}/>))}
            </Grid>
            <AdminMenu page='Teacher'></AdminMenu>
            </div>
        );
    }
}

Teacher.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(({teachers}) => ({teachers}), {
    getTeachersRequest,
    createTeacherRequest,
    updateTeacherRequest,
    deleteTeacherRequest,
    teachersError,
    getMode,
    })(withStyles(styles)(Teacher))