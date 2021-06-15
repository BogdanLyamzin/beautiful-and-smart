import React from 'react';
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';

const IconBtn = props => (
    <IconButton {...props}>
        {props.children}
    </IconButton>
)
export default IconBtn;
IconBtn.defaultProps = {
    type: 'button',
    onClick: () => { }
}
IconBtn.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
}