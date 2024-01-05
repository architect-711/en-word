import { useContext, useState } from 'react';
import WordsContext from '../../../../context/create_page/WordsContext';
import Word from '../../../../typing/interface/Word';
import WordsListViewController from './words_list_view_controller/WordsListViewController';
import styles from './RightAside.module.css';
import Pagination from './pagination/Pagination';
import { WORDS_PER_PAGE } from '../../../../global.d';

export default function RightAside(): JSX.Element {
    const { wordsService } = useContext(WordsContext);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const lastWordIndex: number = currentPage * WORDS_PER_PAGE;
    const firstWordIndex: number = lastWordIndex - WORDS_PER_PAGE;
    const currentWords: Word[] = wordsService.words.slice(firstWordIndex, lastWordIndex);

    function paginate(pageNumber: number) {
        setCurrentPage(pageNumber);
    }

    if (wordsService.words.length === 0 && currentPage !== 1) {
        setCurrentPage(1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <p id={styles.title}>Added words:</p>

                <WordsListViewController
                    words={currentWords}
                />
                <Pagination
                    currentPage={currentPage}
                    totalWords={wordsService.words.length}
                    paginate={paginate}
                />

            </div>
        </div>
    );
}
