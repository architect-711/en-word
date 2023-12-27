import { useContext, useState } from 'react';
import WordsContext from '../../../../../context/create_page/WordsContext';
import InputValidator from '../../../../../modules/input_validator/InputValidator';
import Button from '../../../../ui/button/Button';
import Input from '../../../../ui/input/Input';
import styles from './WordsCreationContainer.module.css';

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

        if (isErrorSetted()) {
            return;
        }

        addValidWord(inputValidator.input);
        setInputValue('');
        setErrorMessage('');
    }

    function isErrorSetted(): boolean {
        const errorMessage: string = getErrorMessage();

        if (errorMessage.length > 0) {
            setErrorMessage(errorMessage);

            return true;
        }
        return false;
    }

    function getErrorMessage(): string {
        //! I don't fucking know how to handle them humanly, ErrorBoundary component doesn't catch the error if you throw it
        if (!inputValidator.isValid()) {
            return "String contains not English letters or it is empty" ;
        }
        if (wordsService.isExistsByTitle(inputValidator.input)) {
            return "This word is already exists.";
        }
        return '';
    }

    function addValidWord(title: string): void {
        wordsService.addNewWord(title);

        setWordsService(wordsService.state);
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
