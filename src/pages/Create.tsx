import { useState } from "react";
import WordsContext from "../context/create_page/WordsContext";
import WordsService from "../modules/create_page/WordsService";
import Body from "../pages_blocks/create/Body";
import Footer from "../pages_blocks/shared/footer/Footer";
import Head from "../pages_blocks/shared/head/Head";

export default function Create(): JSX.Element {
    const [wordsService, setWordsService] = useState<WordsService>(new WordsService([]));

    return (
        <>
            <Head />
            <WordsContext.Provider value={{
                wordsService,
                setWordsService
            }}>
                <Body />
            </WordsContext.Provider>
            <Footer />
        </>
    );
}
