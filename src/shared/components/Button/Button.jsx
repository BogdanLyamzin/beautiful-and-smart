import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const Btn = props => (
    <Button {...props}>
        {props.children}
    </Button>
)
const AddBtn = ({ onClick, text, type, className, startIcon }) => {
    return (
        <Btn onClick={onClick} className={className} variant="contained" type={type} color='primary' size="small" startIcon={startIcon}>{text}</Btn>
    );
}
export default AddBtn;
Btn.defaultProps = {
    type: 'button',
    text: '',
    onClick: () => { }
}
Btn.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string
}