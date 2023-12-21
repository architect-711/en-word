import Button from '../../../ui/button/Button';
import Input from '../../../ui/input/Input';
import ErrorMessage from '../error_message/ErrorMessage';
import styles from './RightMainBlock.module.css';

export default function RightMainBlock(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={`${styles.create_block_container} _global_flex_class`}>

                    <Input placeholder="Enter the title..." className={styles.input}/>
                    <Button text="create" className={styles.button}/>

                </div>


                <ErrorMessage message="Error! Word's title can't be empty!" className={styles.error_message}/>

            </div>
        </div>
    );
}
