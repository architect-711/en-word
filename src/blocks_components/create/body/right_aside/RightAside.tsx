import { useState } from 'react';
import WordsListViewController from '../left_aside/words_list_view_controller/WordsListViewController';
import styles from './RightAside.module.css';
import Word from '../../../../typing/interface/Word';
import Pagination from './pagination/Pagination';

export default function RightAside(): JSX.Element {
    const [currentWords, setCurrentWords] = useState<Word[]>([]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>

            <p id={styles.title}>Added words:</p>

            <WordsListViewController words={currentWords}/>
            <Pagination current={{ currentWords: currentWords, setCurrentWords: setCurrentWords }}/>

            </div>
        </div>
    );
}
