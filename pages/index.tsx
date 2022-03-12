import { useState } from 'react';
import styles from '../styles/Home.module.css';


const Home:React.FC = () => {

  const [list,setList] = useState<string[]>(["Address Book","Learn","Build"]);

  return (
  <div className={styles.mainContainer}>
    <div className={`${styles.container} ${styles.navHeader}`}>
      
        <nav className={`${styles.mobileNav}`}>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  className={`${styles.icon}`}>
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" className={`${styles.icon}`} stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`${styles.icon}`} strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

        </nav>

        <nav className={`${styles.desktopNav}`}>

          <section  className={`${styles.desktopHeader} ${styles.headerConatiner} `}>

              <div className={`${styles.logo}`}>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" className={`${styles.icon}`} stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p>Tapper</p>
              </div>
              <div className={`${styles.inputContainer}`}>
                    <input >
                    </input>
              </div>
            
          </section>

          <section  className={`${styles.desktopHeader} ${styles.headerConatiner}`} style={{width: "250px"}}>
            {
              list.map((val)=>(<p>{val}</p>))
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
                <button>Connect Wallet</button>
            </section>
    </div>
  </div>
  )
}

export default Home
