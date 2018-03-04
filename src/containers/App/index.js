import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleDrawer } from './actions';
import { getDrawer } from './selector';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

import Routes from '../Routes';
import AppDrawer from '../../components/AppDrawer';
import AppToolbar from '../../components/AppToolbar';

const drawerWidth = 240;

const styles = theme => ({
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative'
        },
    },
    content: {
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

class App extends React.Component {
    render() {
        const { classes, theme, open, toggle, history } = this.props;

        return (
            <div className={classes.appFrame}>
                <AppToolbar
                    toggleDrawer={toggle}
                    pathname={history.location.pathname}
                />
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onClose={toggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <AppDrawer />
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <AppDrawer />
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <Routes />
                </main>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
    open: getDrawer()
});

function mapDispatchToProps(dispatch) {
    return {
        toggle: () => { dispatch(toggleDrawer()) }
    };
}

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, mapDispatchToProps)(App)
);