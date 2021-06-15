import React from 'react';
// import styles from './NavBar.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Toolbar, Box, Button } from '@material-ui/core';
import Logo from '../../../../shared/components/Logo';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
        color: "#1976D2"
    },
    containerToolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    btn: {
        color: "#1976D2",
        borderColor: "#1976D2",
        marginRight: theme.spacing(1)
        ,
        "&:hover": {
            backgroundColor: '#1976D2',
            color: "#fff",
        }
    },
    appBar: {
        marginBottom: 50,
    }
}))
const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Container fixed>
                <Toolbar className={classes.containerToolbar}>
                    <IconButton edge='start' aria-label='menu' className={classes.menuButton}>
                        <MenuIcon style={{ fontSize: 35 }} />
                    </IconButton>
                    <Box>
                        <Logo />
                    </Box>
                    <Box>
                        <Button className={classes.btn} variant='outlined' size='small'>Registration</Button>
                        <Button className={classes.btn} variant='outlined' size='small'>Log In</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};
export default NavBar;