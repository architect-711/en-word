import { useState } from "react";
import ErrorMessage from "../../../ui/error_message/ErrorMessage";
import WordsCreationContainer from "../right_aside/words_creation_container/WordsCreationContainer";
import styles from "./Creation.module.css";

export default function Creation(): JSX.Element {
    const [errorMessage, setErrorMessage] = useState<string>('');

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <WordsCreationContainer setErrorMessage={setErrorMessage}/>

                <ErrorMessage error={{ errorMessage, setErrorMessage }} className={styles.error_message}/>

            </div>


        </div>
    );
}
