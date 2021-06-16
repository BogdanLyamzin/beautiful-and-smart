import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './TextInput.module.scss';
const TextInput = ({ value, name, onChange, label }) => {
    const useStyles = makeStyles({
        textField: {
            fontSize: "18px",
        },
    });
    const classes = useStyles();
    const inputProps = {
        value,
        name,
        size: "small",
    };
    return (
        <TextField id="text" fullWidth={true} className={classes.textField} onChange={onChange} label={label} className={styles.textInput} inputProps={inputProps}/>
        );
}
export default TextInput;
TextInput.defaultProps = {
    name: '',
    label: '',
    value: '',
    size: '',
    onChange: () => { }
};
TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func
};