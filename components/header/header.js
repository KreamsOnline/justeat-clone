import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss'
import Searchbar from './searchbar/searchbar';

function Header() {
  return (
    <div className={styles.hero}>
        <div className={styles.container}>
            <div>
                <Image src='/images/Just-Eat-Logo-650x366.png' alt='just-eat-logo' height={100} width={177} />
            </div>
            <ul className={styles.menu}>
                <li>🎁 <span className={styles.items}>For You</span></li>
                <li>🛴 <span className={styles.items}>Deliver for Just Eat</span></li>
                <li className={styles.items}><Link href="/login">Log In</Link></li>
                <li className={styles.items}>Help</li>
            </ul>
        </div>
        <br/>
        <div className={styles.searchbar}>
         <Searchbar />
        </div>
        
        
    </div>
 )
}

export default Header;