import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import BackspaceSharpIcon from '@material-ui/icons/BackspaceSharp';
import IconBtn from '../../../../shared/components/IconButton';
import Modal from '../../../../shared/components/Modal';
import DaysTypesModal from '../components/DaysTypesModal';
import DaysTypesDeleteModal from './DaysTypesDeleteModal'
import Button from '../../../../shared/components/Button';
import { v4 as uuidv4 } from 'uuid';
import styles from './DaysTypesTable.module.scss';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { editDayType } from '../../../../redux/tables/operations';



const columns = [
    { id: 'day', label: 'Day type', minWidth: 300 },
    {
        id: 'description',
        label: 'Short Description',
        minWidth: 300,
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'modification',
        label: 'Modification',
        minWidth: 300,
        format: (value) => value.toFixed(2),
    },
];
function createData(day, description, modification) {
    return { day, description, modification };
}
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    tableCellDensed: {
        paddingTop: 0,
        paddingBottom: 0
    },
    tableCell: {
        padding: 10
    }
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [dense, setDense] = React.useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const [toggleModal, setToggleModal] = React.useState(false);
    const [buttonType, setbuttonType] = React.useState('');

    const handleAddClick = () => {
        setbuttonType('add');
        setToggleModal(!toggleModal);
    }

    const handleEditClick = () => {
        setbuttonType('edit');
        setToggleModal(!toggleModal);
    }

    const handleDeleteClick = () => {
        setbuttonType('delete');
        setToggleModal(!toggleModal);
    }

    const getIcons = () => {
        return (
            <>
                <IconBtn onClick={handleEditClick} color='primary' aria-label="Edit" style={{ fontSize: 50 }}><EditOutlinedIcon /></IconBtn >
                <IconBtn onClick={handleDeleteClick} color='primary' aria-label="Delete" ><BackspaceSharpIcon /></IconBtn>
            </>
        )
    }
    const icons = getIcons()
    const rows = [
        createData('Week day', "Less workload", icons),
        createData('Weekend', 'More workload', icons),
        createData('Holiday', 'A lot of workload', icons),
    ];


    const days = useSelector(state => state.tables.daysTypes, shallowEqual)


    const dispatch = useDispatch()

    const body = {
        title: 'Drink Day',
        description: 'Drink all night',
    }

    return (
        <>
            <div className={styles.btnContainer}>
                <Button onClick={handleAddClick} className={styles.openBtn} text={"Add"} />
            </div>

            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={uuidv4()}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontSize: 20, padding: 15 }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={uuidv4()} align={column.align} className={dense ? classes.tableCellDensed : classes.tableCell}  >
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
            {/* <button onClick={() => dispatch(editDayType(7,
                {
                    title: 'Drink Day',
                    description: 'Drink all night'
                }))}>Edit</button> */}

            {toggleModal && <Modal onClose={() => setToggleModal(!toggleModal)}>
                {buttonType === 'add' && <DaysTypesModal typeName={buttonType} onClick={() => setToggleModal(!toggleModal)} />}
                {buttonType === 'edit' && <DaysTypesModal typeName={buttonType} onClick={() => setToggleModal(!toggleModal)} />}
                {buttonType === 'delete' && <DaysTypesDeleteModal onClick={() => setToggleModal(!toggleModal)} />}
            </Modal>}
        </>
    );
}

