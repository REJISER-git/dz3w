import React from 'react';
import styles from './Description.module.css';

const Description = ({ title, description }) => {
    return (
        <div className={styles.descriptionContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default Description;