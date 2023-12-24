import styles from './Input.module.css';

interface Props {
    placeholder: string,
    className: string,
    value: string,
    setInputValue: (value: string) => void
}

export default function Input({placeholder, className, value, setInputValue}: Props): JSX.Element {
    return (
        <input
            className={`${styles.input} ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={event => setInputValue(event.target.value)}
        />
    );
}
