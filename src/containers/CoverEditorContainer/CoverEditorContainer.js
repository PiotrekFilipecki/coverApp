import React from 'react';
import styles from './CoverEditorContainerStyles.module.scss'

const CoverEditorContainer = (props) => {
    return (
        <div className={styles.editorWrapper}>
            {props.children}
            <div className={styles.editorWrapperinterface} ></div>
        </div>
    );
};

export default CoverEditorContainer;