import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styles from './Modal.module.scss';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Btn from '../Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 500,
        height: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    openBtn: {
        display: "flex",
        justifyContent: 'flex-end',
        marginBottom: 15,
        cursor: 'pointer'
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <>
            <div style={modalStyle} className={classes.paper}>
                <HighlightOffIcon className={styles.btnClose} color='primary' style={{ fontSize: 35 }} onClick={handleClose} />
            </div>
        </>
    );

    return (
        <div>
            <div className={classes.openBtn}>
                <Btn onClick={handleOpen} variant="contained" color='primary' size="small" startIcon={<AddCircleIcon />}>Add</Btn>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}