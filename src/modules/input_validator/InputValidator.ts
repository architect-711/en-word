export default class InputValidator {
    private _input: string;

    constructor(input: string) {
        this._input = input;
    }

    public validate(): void {
        if (!this.isValid()) {
            throw new Error("String contains not english letters.");
        }
    }

    public toNormalString() {
        this._input.trim().toLowerCase();
    }

    public isValid(): boolean {
        this.toNormalString();

        const chars: string[] = this._input.split("");

        for (const char of chars) {
            if (!(char >= "a" || char <= "z")) {
                return false;
            }
        }

        return this._input.length > 0;
    }

    public get input(): string {
        return this._input;
    }
}
