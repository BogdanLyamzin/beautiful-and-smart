import styles from './Logo.module.scss'
const Logo = () => {
    return (
        <>
            <p className={styles.logo}>
                <span className={styles.text}>Lunchpine Sheduler</span>
            </p>
        </>
    )
}
export default Logo