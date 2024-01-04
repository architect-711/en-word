import { useContext, useState } from "react";
import ErrorMessage from "../../../ui/error_message/ErrorMessage";
import WordsCreationContainer from "./words_creation_container/WordsCreationContainer";
import styles from "./Creation.module.css";
import { FoundInAdded } from "./find_in_added/FoundInAdded";
import CreationModeContext from "../../../../context/create_page/CreationModeContext";

export default function Creation(): JSX.Element {
    const { action } = useContext(CreationModeContext);
    const [errorMessage, setErrorMessage] = useState<string>('');

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <WordsCreationContainer setErrorMessage={setErrorMessage}/>

                <ErrorMessage error={{ errorMessage, setErrorMessage }} className={styles.error_message}/>

                { action === "search" && <FoundInAdded/> }

            </div>


        </div>
    );
}
