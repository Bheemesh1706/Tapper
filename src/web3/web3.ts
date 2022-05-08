import Web3 from "web3";
import { ethereum,InfuraUrl,web3,erc20ABI} from "./interface";


export const Connect = async () => {
    ethereum?.request<string[]>({ method: "eth_requestAccounts" }).catch((err:any) => console.log(err));
}

export const ContractAddress =[{address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",name:"tetherclear"},{address:"0xB8c77482e45F1F44dE1745F52C74426C631bDD52",name:"bnb"}] 

export const EthBalance = async (address:string) =>{
  var web3 = new Web3(InfuraUrl);
  var bal;
  await web3.eth.getBalance(address, (err, balance) => { 
    console.log(address + " Balance: ", web3.utils.fromWei(balance)) 
     bal=balance;
  });

  return bal
  
}

export const getAccounts = async ()=>{
  var accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export const EthTokenBalance =async (address:string,contractAddress:string) => {
 var token = new web3.eth.Contract(erc20ABI,contractAddress);  
 const balance = await token.methods.balanceOf(address).call();
 console.log(balance);
 return balance;
}