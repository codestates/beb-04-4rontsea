import { useMoralisWeb3Api } from "react-moralis";


export const fetchSearchNFTs = async (Web3Api) => {
 
  const options = { q: "cryptopunk", chain: "eth", filter: "name" };
  const NFTs = await Web3Api.token.searchNFTs(options);
  return NFTs.result.slice(0,6);
};