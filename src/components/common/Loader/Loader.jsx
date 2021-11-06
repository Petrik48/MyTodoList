import React from 'react';
import styles from './loader.module.scss';
import loader from '../../../assets/images/preloader.svg'

const Loader = (props) => {
    return (
        <div className={styles.loaderWrapper}>
          <img className={styles.loaderSprite}  src={loader} alt="" />
        </div>
    )
 }

 export default Loader;
