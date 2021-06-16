import React from 'react';
import PropTypes from 'prop-types'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  textarea: {
    resize: "none",
    outline: "none",
    width: "100%"
  },
});
const Textarea = ({ className, ...props }) => {
  const classes = useStyles();
    return (
        <TextareaAutosize  className={`${classes.textarea} ${className}`} {...props}/>
    )
};
export default Textarea;
Textarea.propTypes = {
    rows: PropTypes.number,
    cols: PropTypes.number,
    className: PropTypes.string,
}
//inside modal:
//   <Textarea
//     aria-label="description"
//     placeholder="Description"
//     autoFocus
//     />