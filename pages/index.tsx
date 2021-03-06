import { useState,useEffect, FC} from 'react';
import styles from '../styles/Home.module.css';
import { Connect ,getAccounts,EthBalance,EthTokenBalance} from '../src/web3/web3';
import PortfolioCard from '../src/components/watchlist/PortfolioCard';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import MobileSidenav from '../src/components/MobileSidenav';
import { ethereum} from '../src/web3/interface';
import { useRouter } from 'next/router';
import { Links } from '../src/interface/interface';

const Home:React.FC = ({coinData}:any) => {

  const [list,setList] = useState<Links[]>([{value:"Watch List",address:"/watchlist"},{value:"Learn",address:"https://docs.metamask.io/"},{value:"Build",address:"https://rapidapi.com/coingecko/api/coingecko/"}]);
  const [search,setSearch] = useState<boolean>(false);
  const [nav,setNav] = useState<boolean>(false);
  const [value,setValue] = useState(coinData);
  const router = useRouter();

  useEffect(()=>{
    if(ethereum?.selectedAddress!=null)
  {
     router.push("/addressbook")
  }
  })

  
  return (<div className={styles.mainContainer} >
    <div className={`${styles.container} ${styles.navHeader}`}>
      
       <nav className={`${styles.mobileNav}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  className={`${styles.icon}`} onClick={()=>setNav(!nav)} onBlur={()=>setNav(false)}>
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96">
                          <g id="Group_3" data-name="Group 3" transform="translate(-27 -19)">
                            <circle id="Ellipse_8" data-name="Ellipse 8" cx="48" cy="48" r="48" transform="translate(27 19)" fill="#0776d1"/>
                            <path id="Path_9" data-name="Path 9" d="M8,0H56L48,16H0Z" transform="translate(47 44)" fill="#fff"/>
                            <path id="Path_10" data-name="Path 10" d="M8,0H56L48,16H0Z" transform="translate(83 44) rotate(90)" fill="#fff"/>
                          </g>
                </svg>

              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`${styles.icon}`} strokeWidth={2} onClick={()=>setSearch(true)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

        </nav>
        
        <nav className={`${styles.desktopNav}`}>

          <section  className={`${styles.desktopHeader} ${styles.headerConatiner} `}>

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
              <div className={`${styles.inputContainer}`}>

                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
          
                    <input placeholder='Search by Coin'  onFocus={()=>{
                      setSearch(true);
                    }} onBlur={()=>{
                      setSearch(false);
                    }}
                    onChange={(e)=>{
                      setValue([]);
                      coinData.map((data:any)=>{
                          if(data.id.includes(e.target.value.toLowerCase()))
                          {
                            setValue((value:any)=>[...value,data]);
                          }
                      })
  
                    }}/>
                   
              </div>
             
          </section>

          <section  className={`${styles.desktopHeader} ${styles.headerConatiner}`} style={{width: "250px"}}>
            {
              list.map((val,index)=>(
              <a href={val.address} key={index}>{val.value}</a>))
            }
          </section>

         

        </nav>
    </div>

    <div className={`${styles.heroContainer}`}>
            <section className={`${styles.heroBlock}`}>
                <h1>Your home to <span style={{fontSize: "56px",fontWeight: "600",color:"#784ffe"}}>Web3</span></h1>
                <p>Manage your entire web3 portfolio for all your Coins and the ERC-20 Tokens</p>
            </section>
            <section className={`${styles.buttonContainer}`}>
                <button onClick={()=>{Connect()
                   document.location.reload();
               }}>{
                  ethereum?.selectedAddress!=null? "Connected":"Connect"
                }</button>
            </section>
    </div>

    {search && <section className={`${styles.listContainer}`}>
          <p>Coins</p>
          <div className={`${styles.listItem}`}>
            {
              value.map((data:any)=>
              (<PortfolioCard  margin='0px' height='50px' effects={false} data={data} balance={null}  watchlist={false}/>))
            }
          </div>
    </section>}
    {
      nav && <MobileSidenav/>
    }
  </div>
  )
}

export default Home



export const getServerSideProps: GetServerSideProps = async () =>{

  const response = await axios.get("https://coingecko.p.rapidapi.com/coins/markets",{
    headers:{
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
      'X-RapidAPI-Key': '0aad8552camsh655068c6e2ac51dp1dcbadjsn6e64f695b2fc'
    },
    params:{vs_currency: 'usd', order: 'market_cap_desc', per_page: '1000', page: '1'}
  });


   return {
     props: { coinData: response.data
      }   
    }
}