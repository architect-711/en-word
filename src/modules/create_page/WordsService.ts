import Word from "../../typing/interface/Word";

export default class WordsService {
    private _words: Word[] = [];

    constructor(words: Word[]) {
        this._words = words;
    }

    public addNewWord(title: string): void {
        this._words.push(this.craeteWord(title));
    }

    public craeteWord(title: string): Word {
        return {id: Date.now(), title: title};
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
