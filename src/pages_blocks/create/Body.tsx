import LeftAsideBlock from '../../blocks_components/create/body/left_aside_block/LeftAsideBlock';
import RightMainBlock from '../../blocks_components/create/body/right_main_block/RightMainBlock';
import styles from './Body.module.css';

export default function Body(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.content + ' _global_content_class'}>

                <p id={styles.page_title}>Create new words</p>

                <div className={`${styles.creation_blocks} _global_flex_class`}>
                    <LeftAsideBlock/>
                    <RightMainBlock/>
                </div>

            </div>
        </div>
    );
}
