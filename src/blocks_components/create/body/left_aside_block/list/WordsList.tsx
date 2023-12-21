import { useContext } from "react";
import WordsContext from "../../../../../context/create_page/WordsContext";
import WordListItem from "../item/WordListItem";
import styles from './WordsList.module.css';

export default function WordsList(): JSX.Element {
    const { wordsService } = useContext(WordsContext);

    return (
        <ol className={styles.list}>
            {
                wordsService.words.map(word => <WordListItem key={word.id} word={word}/>)
            }
        </ol>
    );
}
