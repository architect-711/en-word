import styles from './ErrorMessage.module.css';

interface Props {
    message: string,
    className: string
}

export default function ErrorMessage({message, className}: Props): JSX.Element {
    return (
        <>
            {
                message.length === 0
                ?
                <></>
                :
                <div className={`${styles.container} ${className}`}>
                    <p className={styles.message}>{message}</p>
                </div>
            }
        </>
    );
}
