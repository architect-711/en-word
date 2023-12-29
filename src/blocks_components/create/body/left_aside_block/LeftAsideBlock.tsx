import { useContext } from 'react';
import Button from '../../../ui/button/Button';
import styles from './LeftAsideBlock.module.css';
import WordsListViewController from './words_list_view_controller/WordsListViewController';
import WordsContext from '../../../../context/create_page/WordsContext';

export default function LeftAsideBlock(): JSX.Element {
    const { wordsService, setWordsService } = useContext(WordsContext);

    function clearWordsList(): void {
        if (wordsService.words.length === 0) {
            return;
        }
        wordsService.clear();

        setWordsService(wordsService.state);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <p id={styles.title}>Added words:</p>

                <WordsListViewController/>

                {/* pagination */}
                <Button
                    text="clear list"
                    onClick={clearWordsList}
                    className={styles.button}
                />

            </div>
        </div>
    );
}
