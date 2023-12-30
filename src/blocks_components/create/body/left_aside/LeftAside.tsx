import { useContext } from 'react';
import WordsContext from '../../../../context/create_page/WordsContext';
import Button from '../../../ui/button/Button';
import styles from './LeftAside.module.css';

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
                <p id={styles.title}>Actions:</p>

                <div className={styles.buttons_container}>

                    <Button
                        text="clear list"
                        onClick={clearWordsList}
                        className={styles.button}
                    />
                    <Button
                        text="find in added"
                        onClick={() => console.log("clicked 'find in added'")}
                        className={styles.button}
                    />
                    <Button
                        text="save"
                        onClick={() => console.log("clicked 'save'")}
                        className={styles.button}
                    />

                </div>


            </div>
        </div>
    );
}
