import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
        value: 'USD',
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

const updateOrCreate = (text,modalType) => (modalType === 'update' ?
    text:
    null);

class CourseForm extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'AUD',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Course Name"
                    className={classes.textField}
                    defaultValue={updateOrCreate(this.props.courseName,this.props.modalType)}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />

                <TextField
                    id="standard-description"
                    label="Description"
                    defaultValue={updateOrCreate(this.props.description,this.props.modalType)}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    required
                    id="standard-price"
                    label="Price"
                    defaultValue={updateOrCreate(this.props.price,this.props.modalType)}
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        );
    }
}

CourseForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseForm);