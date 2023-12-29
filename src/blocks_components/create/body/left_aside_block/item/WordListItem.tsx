import { useContext, useState } from 'react';
import Word from '../../../../../typing/interface/Word';
import styles from './WordListItem.module.css';
import CrossButton from '../../../../ui/cross/CrossButton';
import WordsContext from '../../../../../context/create_page/WordsContext';

interface Props {
    word: Word
}

export default function WordListItem({word}: Props): JSX.Element {
    const { wordsService, setWordsService } = useContext(WordsContext);
    const [shouldShowDeleteButton, setShouldShowDeleteButton] = useState<boolean>(false);

    function deleteWord(): void {
        wordsService.deleteWordById(word.id);

        setWordsService(wordsService.state);
    }

    return (
        <div
            className={`${styles.container} _global_flex_class`}
            onMouseEnter={() => setShouldShowDeleteButton(true)}
            onMouseLeave={() => setShouldShowDeleteButton(false)}
        >
            <li className={`${styles.li}`}>
                {word.title.replace(word.title.charAt(0), word.title.charAt(0).toUpperCase())}
            </li>

            {
                shouldShowDeleteButton && <CrossButton
                    color="rgb(0, 0, 0, .8)"
                    onClick={deleteWord}
                    size={{ width: "20px", height: "20px" }}
                    strokeWidth={"1.5"}
                />
            }
        </div>
    );
}
