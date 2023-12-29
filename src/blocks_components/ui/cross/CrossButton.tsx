import styles from "./CrossButton.module.css";

interface Props {
    size?: { width: string, height: string } | null,
    strokeWidth?: string | null,
    color: string,
    onClick: () => void
}

export default function CrossButton({ size, strokeWidth, color, onClick }: Props): JSX.Element {
    return (
        <svg
            onClick={onClick}
            className={styles.svg}
            width={ size?.width ?? "24px" }
            height={ size?.height ?? "24px" }
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19 5L5 19M5.00001 5L19 19"
                stroke={ color }
                strokeWidth={ strokeWidth ?? "2"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
