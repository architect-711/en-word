import WordsListViewController from '../left_aside/words_list_view_controller/WordsListViewController';
import styles from './RightAside.module.css';

export default function RightAside(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

            <p id={styles.title}>Added words:</p>

            <WordsListViewController/>

            {/* pagination */}

            </div>
        </div>
    );
}
