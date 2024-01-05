import { Dispatch, MutableRefObject, useEffect, useRef, useState } from "react";
import InputValidator from "../modules/input_validator/InputValidator";

// TODO that ass needs to remove this bunch of codes in WordsCreationContainer and FoundInAdded. Make it work.

interface ReturnObjects {
    error: LocalError,
    inputValidator: InputValidator,
    input: MutableRefObject<HTMLInputElement | null>
}
type Return = [ReturnObjects, Dispatch<ReturnObjects>];

interface LocalError {
    isError: boolean,
    message: string
}

const useInputModifyHandler: Return = ({input}) => {
    const [error, setError] = useState<LocalError>({ isError: false, message: '' });

    const inputValidator = new InputValidator('');
    const input = useRef<HTMLInputElement | null>(null);

    useEffect(() => {

    }, []);

    return [[error, inputValidator, input], (error, inputValidator, input ];
}
export default useInputModifyHandler;
