import React from 'react';
import styles from './Search.module.scss';

console.log(styles);


function Search () {
    return (
        <input className={styles.search} placeholder="Поиск..."/>
    )
};

export default Search;