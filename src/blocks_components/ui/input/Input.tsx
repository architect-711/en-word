import { forwardRef } from 'react';
import styles from './Input.module.css';

interface Options {
    placeholder: string,
    className: string
    value: string,
    disabled: boolean
}

interface Props {
    options: Partial<Options>,
    onChangeFun?: (value: string) => void
}

const Input = forwardRef(({ options, onChangeFun }: Props, ref?) => {

    return (
        <input
            {...options}
            className={`${styles.input} ${options.className}`}
            onChange={typeof onChangeFun !== "undefined" ? event => onChangeFun(event.target.value) : () => {}}
            ref={ref}
        />
    );
});

export default Input;
