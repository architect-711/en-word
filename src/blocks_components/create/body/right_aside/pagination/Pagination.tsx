import { Dispatch, SetStateAction, useContext, useState } from "react";
import styles from "./Pagination.module.css";
import WordsContext from "../../../../../context/create_page/WordsContext";
import Word from "../../../../../typing/interface/Word";

interface Props {
    current: {
        currentWords: Word[],
        setCurrentWords: Dispatch<SetStateAction<Word[]>>
    }
}

//! BUG!!! React stucks in infinite loop and all you can do is shut down chrome from task manager
export default function Pagination({ current }: Props): JSX.Element {
    const { wordsService } = useContext(WordsContext);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [wordsPerPage, setWordsPerPage] = useState<number>(10);

    if (wordsService.words.length < 10) {
        current.setCurrentWords(wordsService.words);

        return <div>1</div>
    }

    const indexOfLastWord: number = currentPage * wordsPerPage;
    const indexOfFirstWord: number = indexOfLastWord - wordsPerPage;
    const currentWords: Word[] = wordsService.words.slice(indexOfFirstWord, indexOfLastWord);

    console.log(indexOfLastWord, indexOfFirstWord);
    console.log(currentWords);

    current.setCurrentWords(currentWords);

    return (
        <div className={styles.container}>
            {
                currentWords.map((_, index) => <div>{index + 1}</div>)
            }
        </div>
    );
}
