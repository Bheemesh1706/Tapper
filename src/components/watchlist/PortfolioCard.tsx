import React from 'react';
import styles from  '../../../styles/Watchlist.module.css';
import Bitcoin from '../../../styles/asserts/bitcoin.png';
import Image from 'next/image';
import { PortfolioProps } from '../../interface/interface';
function PortfolioCard(props: PortfolioProps) {
  return (
    <div className={`${styles.portfolioCard}`+ ( props.effects?` ${styles.portfolioCardHover}`: " ")} style={{margin: `${props.margin}` , height: `${props.height}`}}>
    <Image  loader={() => props.data.image} src={props.data.image} height="30px" width="30px" />
    <p>{props.data.name}</p>
    <p> $ {props.data.current_price}</p>
    </div>
  )
}
 
export default PortfolioCard