import { MAX_WORDS_NUMBER } from './../../global.d';
import CustomEssentialError from "../../typing/interface/CustomEssentialError";
import Word from "../../typing/interface/Word";

export default class WordsService {
    private _words: Word[] = [];

    constructor(words: Word[]) {
        this._words = words;
    }

    public addNewWord(title: string): void {
        if (this._words.length === MAX_WORDS_NUMBER) {
            throw new CustomEssentialError("Max words size reached.");
        }
        this._words.push(this.createWord(title));
    }

    public createWord(title: string): Word {
        return { id: Date.now(), title: title };
    }

    public changeTitleById(id: number, title: string): void {
        const word: Word | undefined = this.getWordById(id);

        if (typeof word === "undefined") {
            throw new CustomEssentialError("Attempt to modify unexisting word.");
        }
        this.deleteWordById(id);
        this._words = [...this._words, { ...word, title: title }];
    }

    public getWordById(id: number): Word | undefined {
        return this._words.find(word => word.id === id);
    }

    public isExistsByTitle(title: string): boolean {
        const word: Word | undefined = this._words.find(word => word.title === title);

        return typeof word !== "undefined";
    }

    public getWordByTitle(title: string): Word | undefined {
        return this._words.find(word => word.title === title);
    }

    public deleteWordById(id: number): void {
        this._words = this._words.filter(word => word.id !== id);
    }

    public clear(): void {
        this._words.length = 0;
    }

    public get words(): Word[] {
        return this._words;
    }

    public get state(): WordsService {
        return new WordsService(this._words);
    }
}
