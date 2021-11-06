import React from 'react';
import styles from './header.module.scss';

const Header = (props) => {
    return (
        <div className={styles.header}>
          <div className={styles.headerLogoWrapper}>
            <h1 className={styles.headerLogo}>MyTODOList</h1>
          </div>
        </div>
    )
 }
 
 export default Header;
        