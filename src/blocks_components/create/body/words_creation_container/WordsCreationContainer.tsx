import { useContext, useState } from 'react';
import WordsContext from '../../../../context/create_page/WordsContext';
import InputValidator from '../../../../modules/input_validator/InputValidator';
import Button from '../../../ui/button/Button';
import Input from '../../../ui/input/Input';
import styles from './WordsCreationContainer.module.css';

export default function WordsCreationContainer() {
    const { wordsService, setWordsService } = useContext(WordsContext);
    const [inputValue, setInputValue] = useState<string>('');

    function addNewWord(): void {
        const inputValidator = new InputValidator(inputValue);

        try {
            inputValidator.validate();

            wordsService.addNewWord(inputValue);
            setWordsService(wordsService.state);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={`${styles.container} _global_flex_class`}>

            <Input
                placeholder="Enter the title..."
                className={styles.input}
                value={inputValue}
                setInputValue={setInputValue}
            />
            <Button text="create" className={styles.button} onClick={addNewWord}/>

        </div>
    );
}
