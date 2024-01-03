import { useContext, useState } from 'react';
import WordsContext from '../../../../../context/create_page/WordsContext';
import InputValidator from '../../../../../modules/input_validator/InputValidator';
import MAX_WORDS_NUMBER from '../../../../../typing/constant/maxWordsNumber';
import Button from '../../../../ui/button/Button';
import Input from '../../../../ui/input/Input';
import styles from './WordsCreationContainer.module.css';

interface Props {
    setErrorMessage: (message: string) => void
}

export default function WordsCreationContainer({ setErrorMessage }: Props) {
    const { wordsService, setWordsService } = useContext(WordsContext);
    const [inputValue, setInputValue] = useState<string>('');

    const inputValidator = new InputValidator(inputValue);

    function onCreateButtonClick(): void {
        inputValidator.validate();

        if (isChecksFailed()) {
            return;
        }

        addValidWord(inputValidator.input);
        setInputValue('');
        setErrorMessage('');
    }

    function isChecksFailed(): boolean {
        const errorCases: { id: number, condition: boolean, message: string }[] = [
            {id: 0, condition: !inputValidator.isValid(), message: "String contains not English letter or empty."},
            {id: 1, condition: wordsService.isExistsByTitle(inputValidator.input), message: "This word is already exists."},
            {id: 2, condition: wordsService.words.length === MAX_WORDS_NUMBER, message: `Max words number (${MAX_WORDS_NUMBER}) reached.`}
        ] as const;

        const happanedErrorCase = errorCases.find(error => error.condition);

        if (typeof happanedErrorCase !== "undefined") {
            setErrorMessage(happanedErrorCase.message);

            return true;
        }
        return false;
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
            <Button text="create" onClick={onCreateButtonClick}/>

        </div>
    );
}
