import React, { useEffect ,useState} from 'react';
import styles from  '../../../styles/Watchlist.module.css';
import Bitcoin from '../../../styles/asserts/bitcoin.png';
import Image from 'next/image';
import { PortfolioProps } from '../../interface/interface';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import StatsCard from './StatsCard';
function PortfolioCard(props: PortfolioProps) {

  const [currentBalance,setCurrentBalance] = useState<number>(0);
  const { isOpen:isOpenStats, onOpen:onOpenStats, onClose:onCloseStats } = useDisclosure();
  useEffect(()=>{

    props.balance !=null && props?.balance.map((data:any)=>{
      if(data?.name?.toLowerCase() == props.data.name.toLowerCase())
      {
       setCurrentBalance(props.balance.balance);
      }
    })
  },[])

  return (
    <div className={`${styles.portfolioCard}`+ ( props.effects?` ${styles.portfolioCardHover}`: " ")} style={{margin: `${props.margin}` , height: `${props.height}`}} onClick={()=>{onOpenStats()
    console.log(props.data)
    }}>
       <Modal isOpen={isOpenStats} onClose={onCloseStats}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Coin Stats</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <StatsCard data={props.data}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    <Image  loader={() => props.data?.image} src={props.data?.image} height="30px" width="30px" />
    <p>{props.data.name}</p>
    {
      props.effects && !props.watchlist?<p> $ {props.data.current_price*currentBalance}</p>:<p> $ {props.data.current_price}</p>
    }
    </div>

  )
}
 
export default PortfolioCard