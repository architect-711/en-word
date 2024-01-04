import { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CreationModeContext from '../../../../../context/create_page/CreationModeContext';
import WordsContext from '../../../../../context/create_page/WordsContext';
import InputValidator from '../../../../../modules/input_validator/InputValidator';
import MAX_WORDS_NUMBER from '../../../../../typing/constant/maxWordsNumber';
import ErrorCase from '../../../../../typing/interface/ErrorCase';
import { IsChecksFailed } from '../../../../../typing/types/CreationChecks';
import Button from '../../../../ui/button/Button';
import Input from '../../../../ui/input/Input';
import styles from './WordsCreationContainer.module.css';

interface Props {
    setErrorMessage: (message: string) => void
}

export default function WordsCreationContainer({ setErrorMessage }: Props) {
    const { wordsService, setWordsService } = useContext(WordsContext);
    const { action, setAction } = useContext(CreationModeContext);

    const [searchParams, setSearchParams] = useSearchParams({ foundWordByTitle: "" });
    const [inputValue, setInputValue] = useState<string>('');

    const inputValidator = new InputValidator(inputValue);
    const navigate = useNavigate();

    useEffect(() => {
        action === "add" && setSearchParams("");
    }, [action, searchParams]);


    function handleCreateWordClick(): void {
        inputValidator.validate();

        const isFailed: IsChecksFailed = isChecksFailed();
        if (isFailed[0]) {
            setErrorMessage(isFailed[1].message);

            return;
        }

        addValidWord(inputValidator.input);
        setInputValue('');
        setErrorMessage('');
    }

    function isChecksFailed(): IsChecksFailed {
        const errorCases: { id: number, condition: boolean, message: string }[] = [
            {id: 0, condition: !inputValidator.isValid(), message: "String contains not English letter or empty."},
            {id: 1, condition: wordsService.isExistsByTitle(inputValidator.input), message: "This word is already exists."},
            {id: 2, condition: wordsService.words.length === MAX_WORDS_NUMBER, message: `Max words number (${MAX_WORDS_NUMBER}) reached.`}
        ] as const;

        const happanedErrorCase: ErrorCase | undefined = errorCases.find(error => error.condition);

        return typeof happanedErrorCase !== "undefined" ? [true, happanedErrorCase] : [false, null];
    }

    function addValidWord(title: string): void {
        wordsService.addNewWord(title);

        setWordsService(wordsService.state);
    }

    function handleFindWordByTitleClick(): void {
        console.log("click");
        inputValidator.validate();

        const isFailed: IsChecksFailed = isChecksFailed();
        if (isFailed[0] && isFailed[1].id === 0) {
            return;
        }

        setSearchParams(prevValue => {
            prevValue.set("foundWordByTitle", inputValidator.input);

            return prevValue;
        });
    }

    return (
        <div className={`${styles.container} _global_flex_class`}>

            <Input
                placeholder={ action === "add" ? "Enter the title..." : "Find by title"}
                className={styles.input}
                value={inputValue}
                setInputValue={setInputValue}
            />
            <Button
                text={ action === "add" ? "create" : "find" }
                onClick={ action === "add" ? handleCreateWordClick : handleFindWordByTitleClick}
            />

        </div>
    );
}
