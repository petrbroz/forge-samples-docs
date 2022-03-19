import React from 'react';
import Tippy from '@tippyjs/react';
import styles from './Tooltip.module.css';

export default function Tooltip({ tooltip, children }) {
    return (
        <Tippy content={tooltip}>
            <span className={styles.text}>
                {children}
            </span>
        </Tippy>
    );
}
