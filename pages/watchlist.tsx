import React, { useEffect, useState } from 'react';
import styles from  '../styles/Watchlist.module.css';
import {getAccounts} from '../src/web3/web3';
import PortfolioCard from '../src/components/watchlist/PortfolioCard';
import { EthTokenBalance,ContractAddress,EthBalance } from '../src/web3/web3';
import { GetServerSideProps } from 'next';
import axios from 'axios';

function AddressBook({coinData}:any) {

  const [address,setAddress] = useState<String>('');
  const [head,setHead] = useState<String[]>(["Home","Address Book"]);
  const [footer,setFooter] = useState<String[]>(["List1","List2"]);
  const [balance,setBalance] = useState<{}[]>([{}]);

  useEffect(()=>{
    getAccounts().then((e)=>{
      setBalance([]);
      if(e!=undefined) 
      {
        setAddress(e.slice(0,5)+"..."+e.slice(e.length-4,e.length));

        EthBalance(e).then((e)=>{
          setBalance((balance)=>[...balance,{name:"Ethereum",balance:e}])
        });
        ContractAddress.map((data)=>{
          EthTokenBalance(e,data.address).then((e)=>{
            setBalance((balance)=>[...balance,{name: data.name,balance:e}])
          })
        })
      }

    });

  },[]);

  return (
    <div className={styles.mainContainer}>
        <section className={styles.sideNavbar}>
          
          <div className={styles.desktopNav}>
              <section className={styles.head}>


                  <div className={`${styles.logo}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96">
                              <g id="Group_3" data-name="Group 3" transform="translate(-27 -19)">
                                <circle id="Ellipse_8" data-name="Ellipse 8" cx="48" cy="48" r="48" transform="translate(27 19)" fill="#0776d1"/>
                                <path id="Path_9" data-name="Path 9" d="M8,0H56L48,16H0Z" transform="translate(47 44)" fill="#fff"/>
                                <path id="Path_10" data-name="Path 10" d="M8,0H56L48,16H0Z" transform="translate(83 44) rotate(90)" fill="#fff"/>
                              </g>
                        </svg>

                        <p>Tapper</p>
                  </div>
                  <div className={styles.headList}>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <a>Home</a>
                  </div>
                  <div className={styles.headList}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <a>Address Book</a>
                  </div>
              </section>
              <section className={styles.Footer}>

              </section>
          </div>
        </section>
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
                            <p>{address}</p>
                            <div className={styles.infoContainer}>

                            </div>
                    </div>
                    <div className={styles.bodyMain}>
                        <nav className={styles.bodyNavContainer}>
                          <p>Portfolio</p>  
                        </nav>
                        <div className={styles.portfolio}>
                            { coinData.map((data:any)=>(<PortfolioCard  margin='20px' height='75px' effects={true} data={data} balance={balance}/>))}
                        </div>
                    </div>
            </div>
        </section>
        
    </div>
  )
}

export default AddressBook

export const getServerSideProps: GetServerSideProps = async () =>{

  const response = await axios.get("https://coingecko.p.rapidapi.com/coins/markets",{
    headers:{
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
      'X-RapidAPI-Key': '0aad8552camsh655068c6e2ac51dp1dcbadjsn6e64f695b2fc'
    },
    params:{vs_currency: 'usd', order: 'market_cap_desc', per_page: '5', page: '1'}
  });

    response.data.shift();

   return {
     props: { coinData: response.data
      }   
    }
}