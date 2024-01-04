import { useState } from 'react';
import Creation from '../../blocks_components/create/body/creation/Creation';
import LeftAsideBlock from '../../blocks_components/create/body/left_aside/LeftAside';
import RightAside from '../../blocks_components/create/body/right_aside/RightAside';
import styles from './Body.module.css';
import CreationMode from '../../typing/types/CreationMode';
import CreationModeContext from '../../context/create_page/CreationModeContext';

export default function Body(): JSX.Element {
    const [ action, setAction ] = useState<CreationMode>("add");

    return (
        <div className={styles.container}>
            <div className={styles.content + ' _global_content_class'}>

                <p id={styles.page_title}>Create new words</p>

                <div className={`${styles.creation_blocks} _global_flex_class`}>

                    <CreationModeContext.Provider value={{
                        action: action,
                        setAction: setAction
                    }}>
                        <LeftAsideBlock/>
                        <Creation/>
                    </CreationModeContext.Provider>
                    <RightAside/>

                </div>

            </div>
        </div>
    );
}
