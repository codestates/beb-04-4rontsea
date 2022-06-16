import { useMoralisWeb3Api } from "react-moralis";


export const fetchSearchNFTs = async (Web3Api) => {
 
  const options = { q: "opensea", chain: "eth", filter: "name" };
  const NFTs = await Web3Api.token.searchNFTs(options);
  console.log(NFTs);
  return NFTs.result.slice(0,6);
};