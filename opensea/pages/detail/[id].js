import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import {useMoralisWeb3Api} from "react-moralis"
import {fetchSearchNFTs} from "../../components/SearchCollection" 
import { useState } from 'react';
import { useEffect } from 'react';
// 반응형은 내일... 🔥
// TokenID 클릭 시 이더스캔 해당 ID로 이동
const Main = styled.main`
  min-height: calc(100vh - 315px);
  padding-bottom: 120px;
  position: relative;
  background-color: #121120;
`;

const Section = styled.div`
  text-align: center;
`;

const Frame = styled.div`
  padding: 120px 0px 60px 0px;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  // 크기 제한
  max-width: 35%;
`;

const Image = styled.img`
  box-shadow: 10px 10px 30px rgb(0 0 0 / 10%);
  max-width: 80%;
  max-height: 80%;
  min-width: 50%;
  min-height: 50%;
  border-radius: 10px;
`;

const Image_Name = styled.div`
  color: #ffff;
  font-size: 2em;
  font-weight: 600;
`;

const Text_Layout = styled.div`
  margin: 0px 120px;
  display: flex;
  flex-direction: column;
`;

const Text_Layout_Section = styled.div`
  min-width: 300px;
  min-height: 50%;
  color: #ffff;
`;

const Text_Layout_title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
`;

const Creater = styled.span`
  // 메인컬러
  color: #08b7ff;
  border: 1px solid #08b7ff;
  border-radius: 20px;
  margin-left: 10px;
  padding: 0.5em;
  transition: 0.5s;
  :hover {
    color: #00f4e9;
    border: 1px solid #00f4e9;
  }
`;

const DescriptionLayout_span = styled.span`
  font-size: 2em;
  font-weight: 600;
`;

const P = styled.p`
  margin-left: 10px;
`;

export default function Home() {
  const [nftlist, setNftlist] = useState([]);
  const router = useRouter();
  const id = router.query.id;
  console.log(`toke_id = ${id}`);
  
  const [isloading, setIsloading] = useState(false);
  const Web3Api = useMoralisWeb3Api();
  console.log(Web3Api,"web3api");
    useEffect(()=>{
    if(Web3Api=== undefined) return
    setIsloading(true)
    fetchSearchNFTs(Web3Api)
    .then((nfts)=>{
    console.log(`nft = ${nfts}`);
    const Filtered =  nfts.filter(nft => nft.token_id === id)
      console.log( `filter = ${Filtered} ,`)
      
    const  nftlist = Filtered.map((el)=>{
      
        return {
        metadata:JSON.parse(el.metadata),
        token_id:el.token_id,
         metadata_name:el.metadata_name,
         metadata_description:el.metadata_description,
         minter_address:el.minter_address,
         updatedAt:el.updatedAt
     }})
      
    console.log(`nftlist = ${nftlist}`)
      setNftlist([...nftlist])
      setIsloading(false)})
      .catch((error)=>console.log(error))
  },[])
  console.log(nftlist,"nftlist")
   const imgSrc =nftlist[0]?.metadata.image.replace("ipfs://ipfs/","https://ipfs.moralis.io:2053/ipfs/").replace("ipfs://","https://ipfs.moralis.io:2053/ipfs/")
const Name = nftlist[0]?.metadata_name
const Desc = nftlist[0]?.metadata_description
const creterAdress = nftlist[0]?.minter_address
const TokenId = nftlist[0]?.token_id
const UpdataAt = nftlist[0]?.updatedAt

  return (
    <div>
      <NavBar />
      <Main>
        <Section>
          <Frame>
            <Image src={imgSrc}></Image>
            <Image_Name>{Name}</Image_Name>
          </Frame>
        </Section>
        <Text_Layout>
          <Text_Layout_Section>
            <Text_Layout_title>
              <DescriptionLayout_span>{Desc}</DescriptionLayout_span>
              <Creater>By {creterAdress}</Creater>
            </Text_Layout_title>
            <P>
              Collection of 10,000 Primates facilitating a seamless adoption of
              the web3 space through community fueled ventures and
              collaborations.
            </P>
          </Text_Layout_Section>
          <Text_Layout_Section>
            <Text_Layout_title>
              <DescriptionLayout_span>Details</DescriptionLayout_span>
              <Creater>Owned by {creterAdress}</Creater>
              <a
                href={`https://etherscan.io/address/${TokenId}`}
                target="_blank"
              >
                <Creater>{ TokenId}</Creater>
              </a>
            </Text_Layout_title>
            <P>Sale ends {UpdataAt}</P>
          </Text_Layout_Section>
        </Text_Layout>
      </Main>
      <Footer />
    </div>
  );
}
