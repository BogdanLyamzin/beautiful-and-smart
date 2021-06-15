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
import IconBtn from '../../../../shared/components/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import BackspaceSharpIcon from '@material-ui/icons/BackspaceSharp';
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
const getIcons = () => {
    return (
        <>
            <IconBtn color='primary' aria-label="Edit" style={{ fontSize: 50 }}><EditOutlinedIcon /></IconBtn >
            <IconBtn color='primary' aria-label="Delete" ><BackspaceSharpIcon /></IconBtn>
        </>
    )
}
const icons = getIcons()
const rows = [
    createData('Week day', "Less workload", icons),
    createData('Weekend', 'More workload', icons),
    createData('Holiday', 'A lot of workload', icons),
];
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
    return (
        <>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
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
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} className={dense ? classes.tableCellDensed : classes.tableCell}  >
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
        </>
    );
}