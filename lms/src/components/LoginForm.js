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


const loginOrSignup = (text, mode) => (mode === '' ?
    text :
    null);

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            phone: '',
            verifycode: '',
        };
    }

    getVerifyCode = () => {

    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log('handle form', name, event.target.value);
    };

    handleSignupSubmit = e => {
        // console.log('FORM handle signup fired')
        e.preventDefault();
        const { username,email, password, phone, verifycode } = this.state;

        this.props.onSubmit({
            username: username,
            email: email,
            password: password,
            phone: phone,
            verifycode: verifycode,
        });

    };

    handleLoginSubmit = e => {
        e.preventDefault();
        console.log('login submit',this.state.username,this.state.password);
        const { username, password } = this.state;

        this.props.onSubmit({
            username: username,
            password: password,
        });
        // this.props.onClose();

        // this.setState({
        //     email: '',
        //     password: '',
        // });
    };

    render() {
        const {
            classes, mode, data } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={mode === 'signup' ? this.handleSignupSubmit : this.handleLoginSubmit}>
                {mode === 'signup' ?
                    <TextField
                        required
                        id="standard-phone"
                        label="phone"
                        className={classes.textField}
                        onChange={this.handleChange('phone')}
                        margin="normal"
                    />
                    :
                    null}
                {mode === 'signup' ?
                    <TextField
                        required
                        id="standard-verifycode`"
                        label="verifycode`"
                        className={classes.textField}
                        onChange={this.handleChange('verifycode`')}
                        margin="normal"
                    />
                    :
                    null}
                {mode === 'signup' ?
                <TextField
                    required
                    id="standard-email"
                    label="email"
                    className={classes.textField}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />
                :
                null}
                <TextField
                    required
                    id="standard-username"
                    label="username"
                    className={classes.textField}
                    onChange={this.handleChange('username')}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-password"
                    label="password"
                    className={classes.textField}
                    onChange={this.handleChange('password')}
                    margin="normal"
                />
                {mode === 'signup' ?
                    <Button color="primary" onClick={this.getVerifyCode}>Get code</Button>
                    : null}
                {mode === 'signup' ?
                    <Button type="submit" color="primary">Sign up</Button>
                    :
                    <Button type="submit" color="primary">Login</Button>
                }
            </form>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);