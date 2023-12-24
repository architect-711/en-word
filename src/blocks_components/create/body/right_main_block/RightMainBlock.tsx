import ErrorMessage from '../error_message/ErrorMessage';
import WordsCreationContainer from '../words_creation_container/WordsCreationContainer';
import styles from './RightMainBlock.module.css';

export default function RightMainBlock(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <WordsCreationContainer/>


                <ErrorMessage message="Error! Word's title can't be empty!" className={styles.error_message}/>

            </div>
        </div>
    );
}
