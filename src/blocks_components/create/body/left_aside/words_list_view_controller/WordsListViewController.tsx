import { useContext } from "react";
import WordsContext from "../../../../../context/create_page/WordsContext";
import WordsList from "../list/WordsList";
import styles from "./WordsListViewController.module.css";

export default function WordsListViewController(): JSX.Element {
    const { wordsService } = useContext(WordsContext);

    return (
        <div className={styles.container}>
            {
                wordsService.words.length
                ?
                <WordsList/>
                :
                <p>No words found</p>
            }
        </div>
    );
}
