import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';

const styles = theme => ({
    login: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    formControl: {
        margin: '10px auto',
        maxWidth: '200px'
    },
    button: {
        width: 200,
        margin: 20
    }
});

class Login extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.login}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-simple">email</InputLabel>
                    <Input type="email" id="email" />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-simple">password</InputLabel>
                    <Input type="password" id="password" />
                </FormControl>
                <Button className={classes.button} variant="raised" color="primary">
                    Valider
                </Button>
            </Paper>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);
