import { useContext, useState } from 'react';
import WordsContext from '../../../../../context/create_page/WordsContext';
import InputValidator from '../../../../../modules/input_validator/InputValidator';
import Button from '../../../../ui/button/Button';
import Input from '../../../../ui/input/Input';
import styles from './WordsCreationContainer.module.css';
import CustomEssentialError from '../../../../../typing/interface/CustomEssentialError';

interface Props {
    setErrorMessage: (message: string) => void
}

// TODO: rewrite this piece of fucking shit
export default function WordsCreationContainer({ setErrorMessage }: Props) {
    const { wordsService, setWordsService } = useContext(WordsContext);
    const [inputValue, setInputValue] = useState<string>('');

    const inputValidator = new InputValidator(inputValue);

    function onCreateButtonClick(): void {
        inputValidator.validate();

        if (!inputValidator.isValid()) {
            setErrorMessage("String contains not English letters or it is empty.");

            return;
        }
        if (wordsService.isExistsByTitle(inputValidator.input)) {
            setErrorMessage("This word is already exists.");

            return;
        }

        addValidWord(inputValidator.input);
        setInputValue('');
        setErrorMessage('');
    }

    function addValidWord(title: string): void {
        try {
            wordsService.addNewWord(title);

            setWordsService(wordsService.state);
        } catch (error) {
            if (error instanceof CustomEssentialError) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Unknown error happaned.");
            }
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
            <Button text="create" className={styles.button} onClick={onCreateButtonClick}/>

        </div>
    );
}
