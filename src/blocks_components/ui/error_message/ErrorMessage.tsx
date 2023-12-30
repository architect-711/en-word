import { Dispatch, SetStateAction } from 'react';
import styles from './ErrorMessage.module.css';
import CrossButton from '../cross/CrossButton';

interface Props {
    error: { errorMessage: string, setErrorMessage: Dispatch<SetStateAction<string>> },
    className?: string
}

export default function ErrorMessage({error, className}: Props): JSX.Element {
    function onCloseButtonClick(): void {
        error.setErrorMessage('');
    }

    return (
        <>
            {
                error.errorMessage.length > 0
                ?
                <div className={`${styles.container} ${className} _global_flex_class`}>
                    <p className={styles.message}>{error.errorMessage}</p>

                    <CrossButton
                        color="#fff"
                        strokeWidth="2"
                        onClick={onCloseButtonClick}
                    />
                </div>
                :
                null
            }
        </>
    );
}
