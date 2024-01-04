import { useContext, useState } from 'react';
import CreationModeContext from '../../../../context/create_page/CreationModeContext';
import WordsContext from '../../../../context/create_page/WordsContext';
import CreationMode from '../../../../typing/types/CreationMode';
import Button from '../../../ui/button/Button';
import styles from './LeftAside.module.css';

export default function LeftAsideBlock(): JSX.Element {
    const { wordsService, setWordsService } = useContext(WordsContext);
    const { action, setAction } = useContext(CreationModeContext);

    const [mode, setMode] = useState<CreationMode>(action);

    function clearWordsList(): void {
        if (wordsService.words.length === 0) {
            return;
        }
        wordsService.clear();

        setWordsService(wordsService.state);
    }

    function handleActionButtonClick(): void {
        const definedAction: CreationMode = mode === "add" ? "search" : "add";

        setAction(definedAction);
        setMode(definedAction);
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
                        text={mode === "add" ? "find in added" : "create new"}
                        onClick={handleActionButtonClick}
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
