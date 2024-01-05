import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import WordsContext from "../../../../../context/create_page/WordsContext";
import CustomEssentialError from "../../../../../typing/interface/CustomEssentialError";
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
		if (searchParams.get("foundWordByTitle") === null) {
			setWord(undefined);
			setErrorMessage("No word.");

			return;
		}

		const foundWordByTitle: string | null = searchParams.get("foundWordByTitle");

		const fetchWord = (title: string): void => {
			setWord(undefined);
			const fetchedWord: Word | undefined = wordsService.getWordByTitle(title);

			if (typeof fetchedWord === "undefined") {
				setErrorMessage("No such word.")

				return;
			}
			setWord(fetchedWord);
		}

		if (foundWordByTitle !== null && foundWordByTitle.length > 0) {
			fetchWord(foundWordByTitle);

			return;
		}
		setErrorMessage("No word.");
	}, [searchParams]);

	function onModifyButtonClick(): void {
		if (typeof word === "undefined") {
			setErrorMessage("Word dissapeard somewhere.");

			return;
		}

		if (isInputDisabled) {
			setIsInputDisabled(false);
			setInputValue(word.title);

			return;
		}
		if (inputValue === word.title) {
			return;
		}
		setIsInputDisabled(true);

		const newWord: Word = {
			id: word.id,
			title: inputValue
		}

		setWord(newWord);

		//! move checks to the global file, because the same action should be done here like in WordsCreationContainer

		handleChangingWord(newWord);
		setSearchParams("");
	}

	function handleChangingWord(word: Word): void {
		try {
			if (wordsService.isExistsByTitle(word.title)) {
				console.log('exists');

				throw new CustomEssentialError("Word is already exists.");
			}
			wordsService.changeTitleById(word.id, word.title);

			setWordsService(wordsService.state);
		} catch (error) {
			console.log('set state does not work here');
			error instanceof CustomEssentialError ? setErrorMessage(error.message) : setErrorMessage("Unknown error happaned. ");
		}
	}

	const onDeleteButtonClick = () => {
		wordsService.deleteWordById(word!.id);

		setWordsService(wordsService.state);
		setWord(undefined);
		setSearchParams("");
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
								options={{
									className: styles.input,
									placeholder: '',
									value: isInputDisabled ? word.title : inputValue,
									disabled: isInputDisabled
								}}
								onChangeFun={setInputValue}
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
