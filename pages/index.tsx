import { useState,useEffect, FC} from 'react';
import styles from '../styles/Home.module.css';
import { Connect ,getAccounts,EthBalance,EthTokenBalance} from '../src/web3/web3';



const Home:React.FC = () => {

  const [list,setList] = useState<string[]>(["Address Book","Learn","Build"]);
  
  
  useEffect( () =>{
      getAccounts().then((e)=>{
        EthBalance(e);
        EthTokenBalance(e,'0x6b175474e89094c44da98b954eedeac495271d0f');
      });
  },[])

  return (
  <div className={styles.mainContainer}>

    <div className={`${styles.container} ${styles.navHeader}`}>
      
        <nav className={`${styles.mobileNav}`}>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  className={`${styles.icon}`}>
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96">
                          <g id="Group_3" data-name="Group 3" transform="translate(-27 -19)">
                            <circle id="Ellipse_8" data-name="Ellipse 8" cx="48" cy="48" r="48" transform="translate(27 19)" fill="#0776d1"/>
                            <path id="Path_9" data-name="Path 9" d="M8,0H56L48,16H0Z" transform="translate(47 44)" fill="#fff"/>
                            <path id="Path_10" data-name="Path 10" d="M8,0H56L48,16H0Z" transform="translate(83 44) rotate(90)" fill="#fff"/>
                          </g>
                </svg>

              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`${styles.icon}`} strokeWidth={2}>
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
          
                    <input placeholder='Search by account,token,ENS...' >
                    </input>
              </div>
            
          </section>

          <section  className={`${styles.desktopHeader} ${styles.headerConatiner}`} style={{width: "250px"}}>
            {
              list.map((val,index)=>(<p key={index}>{val}</p>))
            }
          </section>

        </nav>
    </div>

    <div className={`${styles.heroContainer}`}>
            <section className={`${styles.heroBlock}`}>
                <h1>Your home to <span style={{fontSize: "56px",fontWeight: "600",color:"#784ffe"}}>Web3</span></h1>
                <p>Manage your entire web3 portfolio from DeFi to NFTs and whatever comes next. Invest in the latest opportunities from one convenient place.</p>
            </section>
            <section className={`${styles.buttonContainer}`}>
                <button onClick={()=>{Connect()}}>Connect Wallet</button>
            </section>
    </div>
  </div>
  )
}

export default Home
