import { useState } from 'react';
import ErrorMessage from '../error_message/ErrorMessage';
import styles from './RightMainBlock.module.css';
import WordsCreationContainer from './words_creation_container/WordsCreationContainer';

export default function RightMainBlock(): JSX.Element {
    const [errorMessage, setErrorMessage] = useState<string>('');

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <WordsCreationContainer setErrorMessage={setErrorMessage}/>

                <ErrorMessage message={errorMessage} className={styles.error_message}/>

            </div>
        </div>
    );
}
