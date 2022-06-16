import styled from "styled-components";
import Link from "next/link";
// 더미파일 하나 추가했습니다.
import dummyData from "./dummy/dummy";
import {fetchSearchNFTs} from "./SearchCollection"
import { useState } from 'react';
import { useEffect } from 'react';
import {useMoralisWeb3Api} from "react-moralis"
const Lists_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121120;
  color: #ffff;
`;

const Intro_Container = styled.div`
  border: 1px solid #dddd;
  margin-top: 100px;
  padding: 80px 300px;
`;

const Drops = styled.div``;

const NFTlists_Section = styled.section`
  ${Drops} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  padding-top: 150px;
`;

const NFT_Frame = styled.div``;

const NFT_Container = styled.div`
  ${NFT_Frame} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Lists = () => {
  const [nftlist, setNftlist] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const Web3Api = useMoralisWeb3Api();
    useEffect(()=>{
    if(Web3Api=== undefined) return
    setIsloading(true)
    fetchSearchNFTs(Web3Api)
    .then((nfts)=>{
    
      console.log(nfts,"1234")
      
      nfts = nfts.map((el)=>{
      console.log(el.metadata)
        return {
        metadata:JSON.parse(el.metadata),
        token_id:el.token_id
     }})
      
    
      setNftlist(()=>[...nfts] )
      setIsloading(false)}).catch((error)=>console.log(error))
  },[])
  return (
    <Lists_Container>
      <Intro_Container>
        <span style={{ fontSize: "2em", fontWeight: "600" }}>
          Start your NFT trade here, 4rontsea
        </span>
      </Intro_Container>
      <NFTlists_Section>
        <Drops>
          <span
            style={{
              fontSize: "4em",
              fontWeight: "700",
            }}
          >
            Marketplace
          </span>
          <p
            style={{
              fontSize: "1.5em",
            }}
          >
            Be the first to meet NFTs of famous creators.
          </p>
        </Drops>
        <NFT_Container>
          
           {isloading ? undefined :  nftlist.map(({metadata, token_id}, index) => {
            return (
              <NFT_Frame key={index}>
                <Link href={`/detail/${token_id}`}>
                  <a>
                    <img
                      src={metadata.image.replace("ipfs://ipfs/","https://ipfs.moralis.io:2053/ipfs/").replace("ipfs://","https://ipfs.moralis.io:2053/ipfs/")}
                      style={{ maxHeight: "300px", maxWidth: "300px" }}
                    ></img>
                  </a>
                </Link>
                <span>{metadata.name}</span>
              </NFT_Frame>
            );
          })}
        </NFT_Container>
      </NFTlists_Section>
    </Lists_Container>
  );
};
