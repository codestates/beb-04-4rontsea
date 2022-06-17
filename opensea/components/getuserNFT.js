import { useMoralisWeb3Api } from "react-moralis";

const Web3Api = useMoralisWeb3Api();
//현재 
const fetchNFTs = async () => {
  // get NFTs for current user on Mainnet
  const userEthNFTs = await Web3Api.account.getNFTs();
  console.log(userEthNFTs);
  // get testnet NFTs for user
  const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
    chain: "goerli",
  });
  console.log(testnetNFTs);

  // get polygon NFTs for address
  const options = {
    chain: "polygon",
    address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
  };
  const polygonNFTs = await Web3Api.account.getNFTs(options);
};
console.log(polygonNFTs);