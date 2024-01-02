import styles from "./Item.module.css";

interface Props {
    number: number,
    isActive: boolean,
    onClick: (number: number) => void
}

export const Item = ({ number, isActive, onClick }: Props) => {
	return (
		<li
			className={`${styles.li} ${isActive ? styles.active : ''}`}
			onClick={() => onClick(number)}
		>
			{number}
		</li>
	)
}
