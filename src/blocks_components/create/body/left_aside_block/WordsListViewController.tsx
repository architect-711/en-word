import { useContext } from "react";
import WordsContext from "../../../../context/create_page/WordsContext";
import WordsList from "./list/WordsList";

export default function WordsListViewController(): JSX.Element {
    const { wordsService } = useContext(WordsContext);

    return (
        <>
            {
                wordsService.words.length
                ?
                <WordsList/>
                :
                <p>No words found</p>
            }
        </>
    );
}
