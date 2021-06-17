import React from 'react';
import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, List, ListItem, Divider, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './SideBar.module.scss';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#1976D2"
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    // list: {
    //   listStyle: 'none'
    // }
}));
export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon style={{ fontSize: 30 }} />
            </IconButton>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>
                    <ListItem>
                        <NavLink to='/auth' className={styles.link}>
                            AuthPage
                        </NavLink>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <NavLink to='/days' className={styles.link}>
                            DaysTypesPage
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/shifts' className={styles.link}>
                            ShiftsPage
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/positions' className={styles.link}>
                            PositionsPage
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/emloyees' className={styles.link}>
                            EmployeesPage
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/month' className={styles.link}>
                            WorkingMonthPage
                        </NavLink>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}