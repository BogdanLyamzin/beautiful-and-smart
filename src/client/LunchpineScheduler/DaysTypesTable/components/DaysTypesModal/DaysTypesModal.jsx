import Form from '../../../../../shared/components/Form';
import TextInput from '../../../../../shared/components/TextInput';
import Textarea from '../../../../../shared/components/Textarea';
import useForm from '../../../../../shared/hooks/useForm';
import Button from '../../../../../shared/components/Button';
import styles from './DaysTypesModal.module.scss';
import { useDispatch } from 'react-redux'
import { createDayType } from '../../../../../redux/tables/operations';

const initialState = {
    title: '',
    description: ''
}

const DaysTypesModal = ({ onClick, typeName }) => {

    const dispatch = useDispatch();

    const onSubmit = (body, typeName) => {
        return typeName === 'add' ? dispatch(createDayType(body)) : null;
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