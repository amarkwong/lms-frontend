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

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'AUD',
        label: 'A$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];



const updateOrCreate = (text, modalType) => (modalType === 'edit' ?
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
            classes, modalType, data } = this.props;
            console.log('FORM',this.props)
        return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                {modalType === 'edit' ?
                               <TextField
                               disabled
                               id="standard-name"
                               label="Course ID"
                               className={classes.textField}
                               defaultValue={updateOrCreate(data.ID, modalType)}
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
                    defaultValue={data?updateOrCreate(data.Name, modalType):null}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-description"
                    label="Description"
                    defaultValue={data?updateOrCreate(data.Description, modalType):null}
                    className={classes.textField}
                    onChange={this.handleChange('description')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-price"
                    label="Price"
                    defaultValue={data?updateOrCreate(data.Price, modalType):null}
                    className={classes.textField}
                    onChange={this.handleChange('price')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-max-students"
                    label="Max Students"
                    defaultValue={data?updateOrCreate(data.MaxStudents, modalType):null}
                    className={classes.textField}
                    onChange={this.handleChange('maxStudents')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-available-seats"
                    label="Available seats"
                    defaultValue={data?updateOrCreate(data.AvailableSeats, modalType):null}
                    className={classes.textField}
                    onChange={this.handleChange('availableSeats')}
                    margin="normal"
                />
                <TextField
                    id="standard-image-ref"
                    label="Image Ref"
                    defaultValue={data?updateOrCreate(data.ImageRef, modalType):null}
                    className={classes.textField}
                    onChange={this.handleChange('imageRef')}
                    margin="normal"
                />
                {modalType === 'delete' ?
                    <p>Are you sure you want to delete this course?</p>
                    :null
                }
                {modalType === 'edit'?
                <Button type="submit" color="primary">Update</Button>
                : modalType === 'add'?
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