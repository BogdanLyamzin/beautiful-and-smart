import PropTypes from 'prop-types';

const Form = ({ children, onSubmit, className }) => {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
     );
}

export default Form;

Form.defaultProps = {
    onSubmit: () => {}
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    className: PropTypes.string
}