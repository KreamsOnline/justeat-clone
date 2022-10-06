import React from 'react';
import Image from 'next/image';
import styles from './header.module.scss'
import Searchbar from './searchbar/searchbar';

function Header() {
  return (
    <div className={styles.hero}>
        <div className={styles.container}>
            <div>
                <Image src='/images/Just-Eat-Logo-650x366.png' height={100} width={177} />
            </div>
            <ul className={styles.menu}>
                <li>🎁 <span className={styles.items}>For You</span></li>
                <li>🛴 <span className={styles.items}>Deliver for Just Eat</span></li>
                <li className={styles.items}>Log In</li>
                <li className={styles.items}>Help</li>
            </ul>
        </div>
        <br/>
        <Searchbar />
    </div>
 )
}

export default Header;