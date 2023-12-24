import styles from './Button.module.css';

interface Props {
    text: string,
    className: string,
    onClick: () => void
}

export default function Button({text, className, onClick}: Props): JSX.Element {
    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
