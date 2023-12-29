class CustomEssentialError extends Error {
    constructor(message: string) {
        super(message);

        // Object.setPrototypeOf(this, CustomEssentialError.prototype);
        this.name = "CustomEssentialError";
    }
}

export default CustomEssentialError;
