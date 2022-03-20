import React from 'react';
import styles from  '../styles/Watchlist.module.css';

function AddressBook() {
  return (
    <div className={styles.mainContainer}>
        <section className={styles.sideNavbar}></section>
        <section className={styles.middleContainer}>
            <nav className={styles.navContainer}>
                <p>Home</p>
                <div className={`${styles.inputContainer}`}>

                        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                        <input placeholder='Search by account,token,ENS...' >
                        </input>
                </div>
            </nav>
            <div className={styles.bodyContainer}>
                    <div className={styles.bodyHeader}>
                            <p>65436546544654654</p>
                            <div className={styles.infoContainer}>

                            </div>
                    </div>
                    <div className={styles.bodyMain}>
                        <nav className={styles.bodyNavContainer}>
                          <p>Portfolio</p>  
                        </nav>
                    </div>
            </div>
        </section>
        
    </div>
  )
}

export default AddressBook