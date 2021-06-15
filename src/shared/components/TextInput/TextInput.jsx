import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './TextInput.module.scss';

const TextInput = ({ value, onChange, label }) => {
    const inputProps = {
        value,
        name: 'searcher',
        size: "small",
        onChange: () => { onChange() },
    };
    return (
        <TextField id="standard-basic" label={label} className={styles.textInput} inputProps={inputProps} />
    );
}
export default TextInput;

TextInput.defaultProps = {
    label: '',
    value: '',
    onChange: () => { }
};

TextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};