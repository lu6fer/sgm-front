import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import PeopleIcon from 'material-ui-icons/People';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    drawerHeader: theme.mixins.toolbar,
    drawer: {
        height: '100%'
    },
    icon: {
        fontSize: 24
    }
});

const AppDrawer = ({ classes }) => {
    return (
        <div className={classes.drawer}>
            <div className={classes.drawerHeader}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        S&#8226;G&#8226;M&#8226;
                    </Typography>
                </Toolbar>
            </div>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Icon
                            className={classNames(
                                classes.icon,
                                "icon-tank"
                            )}
                            fontSize
                        />
                    </ListItemIcon>
                    <ListItemText primary="Bloc" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon
                            className={classNames(
                                classes.icon,
                                "icon-bcd"
                            )}
                            fontSize
                        />
                    </ListItemIcon>
                    <ListItemText primary="Stab" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon
                            className={classNames(
                                classes.icon,
                                "icon-regulator"
                            )}
                            fontSize
                        />
                    </ListItemIcon>
                    <ListItemText primary="Détendeur" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Utilisateur" />
                </ListItem>
            </List>
        </div>
    )
};

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppDrawer);
