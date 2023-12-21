import styles from './Input.module.css';

interface Props {
    placeholder: string,
    className: string
}

export default function Input({placeholder, className}: Props): JSX.Element {
    return (
        <input
            className={`${styles.input} ${className}`}
            placeholder={placeholder}
        />
    );
}
