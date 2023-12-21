import Footer from "../pages_blocks/shared/footer/Footer";
import Head from "../pages_blocks/shared/head/Head";
import Body from "../pages_blocks/create/Body";
import { useState } from "react";
import WordsService from "../modules/create_page/WordsService";
import WordsContext from "../context/create_page/WordsContext";

export default function Create(): JSX.Element {
    const [wordsService, setWordsService] = useState<WordsService>(new WordsService([{id: 1, title: "test"}]));

    return (
        <>
            <Head/>
            <WordsContext.Provider value={{
                wordsService,
                setWordsService
            }}>
                <Body/>
            </WordsContext.Provider>
            <Footer/>
        </>
    );
}
