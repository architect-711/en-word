import styles from './Button.module.css';

interface Props {
    text: string,
    className: string
}

export default function Button({text, className}: Props): JSX.Element {
    return (
        <button
            className={`${styles.button} ${className}`}
        >
            {text}
        </button>
    );
}
