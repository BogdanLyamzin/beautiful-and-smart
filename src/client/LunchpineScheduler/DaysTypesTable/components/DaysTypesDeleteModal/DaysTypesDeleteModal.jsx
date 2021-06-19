import Button from '../../../../../shared/components/Button';
import styles from './DaysTypesDeleteModal.module.scss';
import Form from '../../../../../shared/components/Form'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { deleteDayType } from '../../../../../redux/tables/operations';

const DaysTypesDeleteModal = ({ onClick, id }) => {

    const days = useSelector(state => state.tables.daysTypes, shallowEqual);
    const dayTitle = days.filter(item => item.id === id).map(item => item.title)


    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteDayType(id))
        onClick()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className={styles.modalContent}>
                <div className={styles.questionContainer}>
                    <p className={styles.question}>Do you really want to delete "{dayTitle}"?</p>
                </div>

                <div className={styles.btnContainer}>
                    <Button type="submit" text="Yes" className={styles.btn} />
                    <Button text="Cancel" className={styles.btn} onClick={onClick} />
                </div>
            </div>
        </Form>
    );
}

export default DaysTypesDeleteModal;