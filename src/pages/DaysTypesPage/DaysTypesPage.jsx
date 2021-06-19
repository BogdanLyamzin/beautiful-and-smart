import DaysTypesTable from '../../client/LunchpineScheduler/DaysTypesTable/components/DaysTypesTable';
import styles from './DaysTypePage.module.scss';
const DaysTypesPage = () => {
    return (
        <div className={styles.container}>
            <DaysTypesTable />
        </div>
    );
}
export default DaysTypesPage;