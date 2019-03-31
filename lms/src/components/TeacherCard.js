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
                {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
            </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                            to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                            cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
            </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
                    </CardContent>
                </Collapse> */}
                <StarRating value="76%"></StarRating>
            </Card>
        );
    }
}

TeacherCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherCard);