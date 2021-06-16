import Button from '../../../../../shared/components/Button';
import styles from './DaysTypesDeleteModal.module.scss';
import { useDispatch } from 'react-redux'
import { deleteDayType } from '../../../../../redux/tables/operations';

const DaysTypesDeleteModal = ({ onClick }) => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteDayType(4))
    }

    return (<div className={styles.modalContent}>
        <div className={styles.questionContainer}>
            <p className={styles.question}>Do you really want to delete "name"?</p>
        </div>

        <div className={styles.btnContainer}>
            <Button type="submit" text="Yes" className={styles.btn} onSubmit={handleSubmit} />
            <Button text="Cancel" className={styles.btn} onClick={onClick} />
        </div>
    </div>);
}

export default DaysTypesDeleteModal;