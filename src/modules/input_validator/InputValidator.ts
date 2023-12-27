export default class InputValidator {
    private _input: string;

    constructor(input: string) {
        this._input = input;
    }

    public validate(): void {
        this._input = this._input.trim().toLowerCase();
    }

    public isValid(): boolean {
        const chars: string[] = this._input.split("");

        for (const char of chars) {
            if (!(char >= "a" && char <= "z")) {
                return false;
            }
        }

        return this._input.length > 0;
    }

    public get input(): string {
        return this._input;
    }

    public set input(string: string) {
        this._input = string;
    }
}
