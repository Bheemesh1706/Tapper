import React, { useEffect ,useState} from 'react';
import styles from  '../../../styles/Watchlist.module.css';
import Bitcoin from '../../../styles/asserts/bitcoin.png';
import Image from 'next/image';
import { PortfolioProps } from '../../interface/interface';
function PortfolioCard(props: PortfolioProps) {

  const [currentBalance,setCurrentBalance] = useState<number>(0);
  useEffect(()=>{
    props.balance.map((data:any)=>{
      if(data?.name?.toLowerCase() == props.data.name.toLowerCase())
      {
       setCurrentBalance(props.balance.balance);
      }
    })
  },[])

  return (
    <div className={`${styles.portfolioCard}`+ ( props.effects?` ${styles.portfolioCardHover}`: " ")} style={{margin: `${props.margin}` , height: `${props.height}`}}>
    <Image  loader={() => props.data.image} src={props.data.image} height="30px" width="30px" />
    <p>{props.data.name}</p>
    {
      props.effects?<p> $ {props.data.current_price*currentBalance}</p>:<p> $ {props.data.current_price}</p>
    }
    </div>

  )
}
 
export default PortfolioCard