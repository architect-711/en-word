import { useContext, useState } from 'react';
import WordsContext from '../../../../../context/create_page/WordsContext';
import InputValidator from '../../../../../modules/input_validator/InputValidator';
import Button from '../../../../ui/button/Button';
import Input from '../../../../ui/input/Input';
import styles from './WordsCreationContainer.module.css';

interface Props {
    setErrorMessage: (message: string) => void
}

export default function WordsCreationContainer({setErrorMessage}: Props) {
    const { wordsService, setWordsService } = useContext(WordsContext);
    const [inputValue, setInputValue] = useState<string>('');

    function addNewWord(): void {
        const inputValidator = new InputValidator(inputValue);

        try {
            inputValidator.validate();

            wordsService.addNewWord(inputValue);

            // TODO: does something with this heap of setStates
            setWordsService(wordsService.state);
            setInputValue('');
            setErrorMessage('');
        } catch (error) {
            // TODO: Handle error
            setErrorMessage(error.message);
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
