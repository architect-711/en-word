import styles from './LeftAsideBlock.module.css';
import WordsListViewController from './WordsListViewController';

export default function LeftAsideBlock(): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <p id={styles.title}>Added words:</p>

                <WordsListViewController/>

                {/* buttons */}

            </div>
        </div>
    );
}
