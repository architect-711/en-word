import { WORDS_PER_PAGE } from "../../../../../global.d";
import styles from "./Pagination.module.css";
import { Item } from "./paginaiton_item/Item";

interface Props {
	currentPage: number,
	totalWords: number,
	paginate: (pageNumber: number) => void
}

export default function Pagination({ currentPage, totalWords, paginate }: Props) {
	const pageNumbers: number[] = [];

	for (let index: number = 1; index <= Math.ceil(totalWords / WORDS_PER_PAGE); index++) {
		pageNumbers.push(index);
	}

	return (
		<div className={styles.container}>
			<ul className={`${styles.ul} _global_flex_class`}>
				{
					pageNumbers.map(number => (
						<Item
							key={number}
							number={number}
							isActive={number === currentPage}
							onClick={() => paginate(number)}
						/>
					))
				}
			</ul>
		</div>
	)
}
