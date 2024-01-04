import Word from "../../../../../typing/interface/Word";
import WordListItem from "./item/WordListItem";
import styles from './WordsList.module.css';

interface Props {
    words: Word[]
}

export default function WordsList({ words }: Props): JSX.Element {
    return (
        <ol className={styles.list}>
            {
                words.map(word => <WordListItem key={word.id} word={word}/>)
            }
        </ol>
    );
}
