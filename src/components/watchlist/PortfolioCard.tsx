import React from 'react';
import styles from  '../../../styles/Watchlist.module.css';
import Bitcoin from '../../../styles/asserts/bitcoin.png';
import Image from 'next/image'

function PortfolioCard() {
  return (
    <div className={styles.portfolioCard}>
    <Image src={Bitcoin} height="50px" width="50px" />
    <p>Bitcoin</p>
    <p>$ 65K</p>
    </div>
  )
}

export default PortfolioCard