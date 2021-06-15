import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
const Btn = props => (
    <Button {...props}>
        {props.children}
    </Button>
)
export default Btn;
Btn.defaultProps = {
    type: 'button',
    onClick: () => { }
}
Btn.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
}