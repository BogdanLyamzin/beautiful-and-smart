import styles from './Logo.module.scss'
const Logo = () => {
    return (
        <>
            <p className={styles.logo}>
                <span className={styles.text}>Lunchpine Sheduler</span>
            </p>
            <p className={styles.logo2}>
                <span className={styles.text2}>LS</span>
            </p>
        </>
    )
}
export default Logo;