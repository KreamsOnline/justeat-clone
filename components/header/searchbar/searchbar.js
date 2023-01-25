import React, { Fragment } from 'react';
import styles from './searchbar.module.scss';

function Searchbar() {
  return (
    <Fragment>
        <div className={styles.Shell} >
            <h1 className={styles.searchTitle}>Tuck into a takeaway today</h1>
            <h2 className={styles.searchSubtitle}>Find Restaurants delivering right now, near you</h2>
            <form className={styles.formSearch}>
                <div className={styles.formWrapper}>
                    <div className={styles.formInputWrapper}>
                        <label className={styles.formSearchLabel}>
                            <input className={styles.searchInput} type='text' aria-label='Enter your Postcode' />
                            <span className={styles.formPlaceholder}>Enter your postcode</span>
                            <div></div>
                        </label>
                        <div className={styles.formInnerField}>
                        
                        </div>
                    </div>
                    <button className={styles.formSearchButton} type='submit' aria-label='Search'>
                        <span>Search</span>
                    </button>
                </div>
            </form>
        </div>
    </Fragment>
  )
}

export default Searchbar