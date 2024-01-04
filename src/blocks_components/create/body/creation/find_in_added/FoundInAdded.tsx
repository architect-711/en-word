import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import WordsContext from "../../../../../context/create_page/WordsContext";
import Word from "../../../../../typing/interface/Word";
import Button from "../../../../ui/button/Button";
import Input from "../../../../ui/input/Input";
import styles from "./FoundInAdded.module.css";

type StateWord = undefined | Word;

export const FoundInAdded = () => {
	const { wordsService, setWordsService } = useContext(WordsContext);

	const [searchParams, setSearchParams] = useSearchParams();

	const [word, setWord] = useState<StateWord>();
	const [errorMessage, setErrorMessage] = useState<string>("");

	const [inputValue, setInputValue] = useState<string>("");
	const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);

	useEffect(() => {
		const foundWordByTitle: string | null = searchParams.get("foundWordByTitle");

		console.log(foundWordByTitle !== null && foundWordByTitle.length > 0);
		if (foundWordByTitle !== null && foundWordByTitle.length > 0) {
			fetchWord(foundWordByTitle);

			return;
		}
		setErrorMessage("No word.");
	}, [searchParams]);

	function fetchWord(title: string): void {
		setWord(undefined);
		const fetchedWord: Word | undefined = wordsService.getWordByTitle(title);

		if (typeof fetchedWord === "undefined") {
			setErrorMessage("No such word.")

			return;
		}
		setWord(fetchedWord);
	}

	function onModifyButtonClick(): void {
		if (isInputDisabled) {
			setInputValue(word!.title);
			setIsInputDisabled(false);

			return;
		}
		setIsInputDisabled(true);
		setWord({ id: word!.id, title: inputValue });


		// move checks to the global file, because the same action should be done here like in WordsCreationContainer
		// crutch (deletion is not works)

		wordsService.deleteWordById(word!.id);
		wordsService.addNewWord(inputValue);

		setWordsService(wordsService.state);
		// wordsService.
		// setWordsService()
	}

	const onDeleteButtonClick = () => {
		wordsService.deleteWordById(word!.id);

		setWordsService(wordsService.state);
		setWord(undefined);
	}

	return (
		<div className={styles.container}>

			<div className={styles.break_line}></div>

			<div className={styles.action_container}>

				<p id={styles.title}>Found word:</p>

				{
					typeof word === "undefined"
					?
					<p className={styles.error_message}>{ errorMessage }</p>
					:
					<div className={`${styles.found_element_controls} _global_flex_class`}>

						<Input
							className={styles.input}
							value={ isInputDisabled ? word.title : inputValue}
							isDisabled={isInputDisabled}
							setInputValue={setInputValue}
						/>

						<Button
							className={styles.modify_button}
							text={ isInputDisabled ? "modify" : "save"}
							onClick={onModifyButtonClick}
						/>

						<Button
							className={styles.delete_button}
							text="delete"
							onClick={onDeleteButtonClick}
						/>

					</div>
				}



			</div>

		</div>
	)
}
