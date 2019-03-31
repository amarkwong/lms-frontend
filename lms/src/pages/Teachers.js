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
            <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" >
            {teachers.slice(0,teachers.length).map(teacher => (
                    <TeacherCard key={teacher.ID} mode={mode} data={teacher}/>))}
                    {/* <TeacherCard ImageRef="https://i.imgur.com/Ld4fkyJ.jpg" mode='edit'></TeacherCard> */}
                    {/* <TeacherCard ImageRef="https://i.imgur.com/Ld4fkyJ.jpg" mode='delete'></TeacherCard> */}
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