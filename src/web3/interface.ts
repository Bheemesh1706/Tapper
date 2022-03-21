
import { MetaMaskInpageProvider } from '@metamask/providers';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}


export const InfuraUrl = "https://mainnet.infura.io/v3/60979ad9b7b445e79e178d081b845bb0";

export const ethereum = typeof window!="undefined" ? window.ethereum as MetaMaskInpageProvider: null;

export const web3 = new Web3(ethereum);

export const erc20ABI =[
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  }
]