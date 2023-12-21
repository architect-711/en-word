import { createContext } from "react";
import WordsService from "../../modules/create_page/WordsService";

type Context = {
    wordsService: WordsService,
    setWordsService: (wordsService: WordsService) => void
}
const WordsContext = createContext<Context>({wordsService: new WordsService([]), setWordsService: () => {}});

export default WordsContext;
