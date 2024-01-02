import Word from "../../../../../typing/interface/Word";
import WordsList from "../list/WordsList";
import styles from "./WordsListViewController.module.css";

interface Props {
    words: Word[]
}

export default function WordsListViewController({ words }: Props): JSX.Element {
    return (
        <div className={styles.container}>
            {
                words.length > 0
                ?
                <WordsList words={words}/>
                :
                <p>No words found</p>
            }
        </div>
    );
}
