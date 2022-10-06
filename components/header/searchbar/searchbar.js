import React, { Fragment } from 'react';
import styles from './searchbar.module.scss';

function Searchbar() {
  return (
    <div>
        <div className={styles.Shell} >
            <h1 className={styles.searchTitle}>Tuck into a takeaway today</h1>
            <h2 className={styles.searchSubtitle}>Find Restaurants delivering right now, near you</h2>
            <form >
                <div>
                    <div>
                        <label>
                            <input type='text' aria-label='Enter your Postcode' />
                            <span>Enter your postcode</span>
                            <div></div>
                        </label>
                        <div>
                        
                        </div>
                    </div>
                    <button type='submit' aria-label='Search'>
                        <span>Search</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Searchbar