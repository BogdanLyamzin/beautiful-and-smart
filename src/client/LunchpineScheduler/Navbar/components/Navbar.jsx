import React from 'react';
import styles from './Navbar.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import SideBar from '../../SideBar/components/SideBar';
import Logo from '../../../../shared/components/Logo';
const useStyles = makeStyles((theme) => ({
    containerToolbar: {
        display: "flex",
        justifyContent: "space-around"
    },
    btn: {
        color: "#1976D2",
        borderColor: "#1976D2",
        marginRight: theme.spacing(1),
        transition: "all 0.2s ease-in-out"
        ,
        "&:hover": {
            backgroundColor: '#1976D2',
            color: "#fff",
            boxShadow: "-2px -2px 5px #fff, 2px 2px 5px #BABECC",
        }
    }
}))
const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' color='inherit'>
            {/* <Box className={styles.container}> */}
            <Toolbar className={classes.containerToolbar}>
                <SideBar />
                <Box>
                    <Logo />
                </Box>
                <Hidden only={['xs', 'sm']}>
                    <Box className={styles.containerBtn}>
                        <Button className={classes.btn} variant='outlined' size='small'>Sign Up</Button>
                        <Button className={classes.btn} variant='outlined' size='small'>Sign In</Button>
                    </Box>
                </Hidden>
            </Toolbar>
            {/* </Box> */}
        </AppBar>
    )
};
export default NavBar;

