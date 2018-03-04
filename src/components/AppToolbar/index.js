import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 240;
const styles = theme => ({
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    loginIconHide: {
        display: 'none'
    },
    title: {
        textTransform: 'capitalize'
    }
});

const AppToolbar = ({ toggleDrawer, classes, pathname }) => {
    const title = pathname.split('/')[1];
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    className={
                        classNames(classes.navIconHide, {
                            [classes.loginIconHide]: title === 'login'
                        })
                    }
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="title" color="inherit" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

AppToolbar.propTypes= {
    toggleDrawer: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppToolbar);
