import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';


import TeacherModal from './TeacherModal';
import StarRating from './StarRating';
import CustomizedSnackbars from './SnackBar';

const styles = theme => ({
    card: {
        maxWidth: 400,
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    // expand: {
    //     transform: 'rotate(0deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // },
    // expandOpen: {
    //     transform: 'rotate(180deg)',
    // },
    avatar: {
        backgroundColor: indigo[600]},
        // backgroundColor: teal['A100'],
});


const EnrollOrTeach = (role) => (role === 'student' ?
    <CustomizedSnackbars label='Enroll' status='unenrolled' role={role}></CustomizedSnackbars> :
    <CustomizedSnackbars label='Teach' status='unteached' role={role}></CustomizedSnackbars>
);
const DropOrResign = (role) => (role === 'teacher' ?
    <CustomizedSnackbars label='Drop'></CustomizedSnackbars> :
    <CustomizedSnackbars label='Resign'></CustomizedSnackbars>
);

class TeacherCard extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleEnroll = () => {

    }

    render() {
        const { classes, mode, data } = this.props;
        console.log(data.PhotoPath);
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Teacher" className={classes.avatar}>
                            T
                        </Avatar>
                    }
                    action={
                        mode === 'edit' ?
                            <TeacherModal modalType='edit' data={data}></TeacherModal>
                            : mode === 'delete' ?
                                <TeacherModal modalType='delete' data={data} ></TeacherModal>
                                : null
                    }
                    title={data.Name}
                    // subheader={
                    //     '$ ' + data.Price}
                >
                </CardHeader>
                <CardMedia
                    className={classes.media}
                    image={data.PhotoPath}
                // title="Paella dish"
                />
                <CardContent>
                    <Typography align='left' component="p">
                        {data.Story}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    {/* <Grid justify="space-evenly" alignItems="flex-start"> */}
                    {/* <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton> */}
                        {/* {
                            EnrollOrTeach('student')
                        }
                        {
                            DropOrResign('student')
                        } */}
                    {/* </Grid> */}
                </CardActions>
                <StarRating value={data.Rating}></StarRating>
            </Card>
        );
    }
}

TeacherCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherCard);