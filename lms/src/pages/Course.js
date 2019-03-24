import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import slide from '../images/slider-1.jpg';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';


import CourseCard from '../components/CourseCard';
import CourseModal from '../components/CourseModal'
import AdminMenu from '../components/AdminMenu';

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
    render() {
        return (
            <div>
            <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-start" >
                    <CourseCard ImageRef="https://i.imgur.com/Ld4fkyJ.jpg" mode='edit'></CourseCard>
                    <CourseCard ImageRef="https://i.imgur.com/Ld4fkyJ.jpg" mode='delete'></CourseCard>
            </Grid>
            {/* <CourseModal></CourseModal> */}
            <AdminMenu></AdminMenu>
            </div>
        );
    }
}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Course);