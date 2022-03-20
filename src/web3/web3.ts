import Web3 from 'web3';
import { MetaMaskInpageProvider } from '@metamask/providers';

export const Connect = async () => {
    
    const ethereum = window.ethereum as MetaMaskInpageProvider;

    ethereum.request<string[]>({ method: "eth_requestAccounts" }).then((accounts) => {
        return accounts
      }).catch((err) => console.log(err));
}