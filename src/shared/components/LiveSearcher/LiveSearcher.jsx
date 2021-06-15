import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';
import styles from './LiveSearcher.module.scss';

const LiveSearcher = ({value, onChange}) => {
    const inputProps = {
        value,
        name: 'searcher',
        size: "small",
        onChange: () => { onChange() },

    };
    return (<TextField id="outlined-search" className={styles.liveSearcher} label="Search" type="search" variant="standard" inputProps={inputProps} /> );
}

export default LiveSearcher;

LiveSearcher.defaultProps = {
    value: '',
    onChange: () => { }
};

LiveSearcher.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};