import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});


const loginOrSignup = (text, mode) => (mode === 'edit' ?
    text :
    null);

class CourseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            maxStudents: '',
            availableSeats: '',
            imageRef: '',
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {name, description, price, maxStudents, availableSeats, imageRef } = this.state;

        this.props.onSubmit({
            name,
            description,
            price,
            maxStudents,
            availableSeats,
            imageRef,
        });

        this.setState({
            name: '',
            description: '',
            price: '',
            maxStudents: '',
            availableSeats: '',
            imageRef: '',
        });
    };

    render() {
        const {
            classes, mode, data } = this.props;
            console.log('FORM',this.props)
        return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                {mode === 'edit' ?
                               <TextField
                               disabled
                               id="standard-name"
                               label="Course ID"
                               className={classes.textField}
                               defaultValue={loginOrSignup(data.ID, mode)}
                               onChange={this.handleChange('name')}
                               margin="normal"
                           />
                           :
                           null}
                <TextField
                    required
                    id="standard-name"
                    label="Course Name"
                    className={classes.textField}
                    defaultValue={data?loginOrSignup(data.Name, mode):null}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-description"
                    label="Description"
                    defaultValue={data?loginOrSignup(data.Description, mode):null}
                    className={classes.textField}
                    onChange={this.handleChange('description')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-price"
                    label="Price"
                    defaultValue={data?loginOrSignup(data.Price, mode):null}
                    className={classes.textField}
                    onChange={this.handleChange('price')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-max-students"
                    label="Max Students"
                    defaultValue={data?loginOrSignup(data.MaxStudents, mode):null}
                    className={classes.textField}
                    onChange={this.handleChange('maxStudents')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-available-seats"
                    label="Available seats"
                    defaultValue={data?loginOrSignup(data.AvailableSeats, mode):null}
                    className={classes.textField}
                    onChange={this.handleChange('availableSeats')}
                    margin="normal"
                />
                <TextField
                    id="standard-image-ref"
                    label="Image Ref"
                    defaultValue={data?loginOrSignup(data.ImageRef, mode):null}
                    className={classes.textField}
                    onChange={this.handleChange('imageRef')}
                    margin="normal"
                />
                {mode === 'delete' ?
                    <p>Are you sure you want to delete this course?</p>
                    :null
                }
                {mode === 'edit'?
                <Button type="submit" color="primary">Update</Button>
                : mode === 'add'?
                <Button type="submit" color="primary">Create</Button>
                :
                <Button type="submit" color="primary">Delete</Button>
                }
            </form>
        );
    }
}

CourseForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseForm);