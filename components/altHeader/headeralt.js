import React from 'react';
import Image from 'next/image';
import styles from './headeralt.module.scss'

function HeaderAlt() {
  return (
    <div className={styles.hero}>
        <div className={styles.container}>
            <div>
                <Image src='/images/Just-Eat-Logo-650x366.png' alt='just-eat-logo' height={100} width={177} />
            </div>
            {/* <ul className={styles.menu}>
                <li>🎁 <span className={styles.items}>For You</span></li>
                <li>🛴 <span className={styles.items}>Deliver for Just Eat</span></li>
                <li className={styles.items}>Log In</li>
                <li className={styles.items}>Help</li>
            </ul> */}
        </div>
    </div>
 )
}

export default HeaderAlt;