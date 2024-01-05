import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import WordsContext from "../../../../../context/create_page/WordsContext";
import Word from "../../../../../typing/interface/Word";
import Button from "../../../../ui/button/Button";
import Input from "../../../../ui/input/Input";
import styles from "./FoundInAdded.module.css";
import CustomEssentialError from "../../../../../typing/interface/CustomEssentialError";

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
		if (typeof word === "undefined") {
			setErrorMessage("Word dissapeard somewhere.");

			return;
		}

		if (isInputDisabled) {
			setInputValue(word.title);
			setIsInputDisabled(false);

			return;
		}
		setIsInputDisabled(true);

		const newWord: Word = {
			id: word.id,
			title: inputValue
		}

		setWord(newWord);

		// move checks to the global file, because the same action should be done here like in WordsCreationContainer

		handleChangingWord(newWord);
	}

	function handleChangingWord(word: Word): void {
		try {
			wordsService.changeTitleById(word.id, word.title);

			setWordsService(wordsService.state);
		} catch (error) {
			error instanceof CustomEssentialError ? setErrorMessage(error.message) : setErrorMessage("Unknown error happaned. ");
		}
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
						<p className={styles.error_message}>{errorMessage}</p>
						:
						<div className={`${styles.found_element_controls} _global_flex_class`}>

							<Input
								className={styles.input}
								value={isInputDisabled ? word.title : inputValue}
								isDisabled={isInputDisabled}
								setInputValue={setInputValue}
							/>

							<Button
								className={styles.modify_button}
								text={isInputDisabled ? "modify" : "save"}
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
