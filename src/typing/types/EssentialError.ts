export default class EssentialError extends Error {
    private _cause: string;

    constructor(message: string, cause: string) {
        super(message);
        this._cause = cause;
    }

    public get message(): string {
        return this.message;
    }

    public get cause(): string {
        return this._cause;
    }
}
