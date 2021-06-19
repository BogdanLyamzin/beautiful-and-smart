import Form from '../../../../../shared/components/Form';
import TextInput from '../../../../../shared/components/TextInput';
import Textarea from '../../../../../shared/components/Textarea';
import useForm from '../../../../../shared/hooks/useForm';
import Button from '../../../../../shared/components/Button';
import styles from './DaysTypesModal.module.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { createDayType } from '../../../../../redux/tables/operations';
import { editDayType } from '../../../../../redux/tables/operations';

let initialState = null;

const DaysTypesModal = ({ onClick, typeName, id }) => {

    const days = useSelector(state => state.tables.daysTypes, shallowEqual);
    const dispatch = useDispatch();
    const btnTypeName = typeName;

    if (typeName === 'edit') {
        const title = days.filter(item => item.id === id).map(item => item.title);
        const description = days.filter(item => item.id === id).map(item => item.description);
        initialState = {
            title,
            description
        }
    }
    if (typeName === 'add') {
        initialState = {
            title: '',
            description: ''
        }
    }

    const onSubmit = (body) => {
        if (btnTypeName === 'add') {
            dispatch(createDayType(body))
            onClick()
            reset()
        }
        else if (btnTypeName === 'edit') {
            dispatch(editDayType(id, body))
            onClick()
            reset()
        }
    }

    const reset = () => {
        return initialState;
    }

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    return (
        <div className={styles.modalContent}>
            <p className={styles.text}>Adding a new day type:</p>
            <Form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <TextInput label={"Day type"} name="title" value={data.title} onChange={handleChange} />
                </div>
                <label htmlFor="textarea" className={styles.textareaLabel} >Day type description:</label>
                <Textarea
                    name="description"
                    value={data.description}
                    id="textarea"
                    aria-label="description"
                    placeholder="Type..."
                    autoFocus
                    rowsMin={6}
                    className={styles.textarea}
                    onChange={handleChange}
                />
                <div className={styles.btnContainer}>
                    <Button text="Save" type="submit" className={styles.btn} />
                    <Button text="Cancel" className={styles.btn} onClick={onClick} />
                </div>
            </Form>
        </div>
    );
}

export default DaysTypesModal;