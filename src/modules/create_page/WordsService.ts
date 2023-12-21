import Word from "../../typing/interface/Word";

export default class WordsService {
    private _words: Word[] = [];

    constructor(words: Word[]) {
        this._words = words;
    }

    public addNewWord(title: string): void {

    }

    public craeteWord(title: string): Word {
        return {id: Date.now(), title: title};
    }

    public get words(): Word[] {
        return this._words;
    }

    public get state(): this {
        return this;
    }
}
