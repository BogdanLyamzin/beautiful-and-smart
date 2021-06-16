import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styles from './Modal.module.scss';
const Modal = ({ children, onClose }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.code === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const modalRoot = document.getElementById('modal-root');

    return (
        createPortal(<div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modalLayout}>
                <div className={styles.modalContent}>
                    <HighlightOffIcon className={styles.btnClose} color='primary' style={{ fontSize: 35 }} onClick={onClose} />
                    {children}
                </div>
            </div>
        </div>, modalRoot)
    );
}
export default Modal;