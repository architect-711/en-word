import styles from './Input.module.css';

interface Props {
    placeholder?: string,
    className?: string,
    value: string,
    isDisabled?: boolean,
    setInputValue: (value: string) => void
}

export default function Input({placeholder, className, value, isDisabled, setInputValue}: Props): JSX.Element {
    return (
        <input
            className={`${styles.input} ${className}`}
            placeholder={placeholder}
            value={value}
            disabled={isDisabled}
            onChange={event => setInputValue(event.target.value)}
        />
    );
}
