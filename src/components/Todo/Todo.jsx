import React from 'react';
import styles from './Todo.module.css';

const Todo = ({ todo }) => {
    return (
        <div className={styles.todo}>
            <p>{todo}</p>
        </div>
    );
};

export default Todo;