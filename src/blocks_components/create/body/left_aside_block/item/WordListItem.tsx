import Word from '../../../../../typing/interface/Word';
import styles from './WordListItem.module.css';

interface Props {
    word: Word
}

export default function WordListItem({word}: Props): JSX.Element {
    return (
        <li className={styles.li}>
            {word.title}
        </li>
    );
}
