import ErrorMessage from '../error_message/ErrorMessage';
import WordsCreationContainer from './words_creation_container/WordsCreationContainer';
import styles from './RightMainBlock.module.css';
import { useState } from 'react';

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
