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
  const [IsFatching, setIsFatching] = useState(false);
  const router = useRouter();
  const id = router.query.id;
  // console.log(`toke_id = ${id}`);
  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true);
  const [imgSrc, setImgSrc] = useState([]);
  const [name, setName] = useState([]);
  const [desc, setDsec] = useState([]);
  const [creater, setCreater] = useState([]);
  const [tokenId, setTokenId] = useState([]);
  const [updateAt, setUpdateAt] = useState([]);
  const Web3Api = useMoralisWeb3Api();
  // console.log(id);
  

  if(Web3Api=== undefined) return
  
  const asyncFc =async ()=>{
    try{
      setIsloading(true)
      
     const data = await fetchSearchNFTs(Web3Api)
     
     const filterData = data.filter(nft=>nft.token_id === id);
     console.log(filterData);
     const mapData = filterData.map(el=>{

      const metadata = JSON.parse(el.metadata)
      console.log(metadata)
      const {image} =metadata
          const result =  {
          image,
          tokenId:el.token_id,
           name:el.metadata_name,
           desc:el.metadata_description,
           createrAddress:el.minter_address,
           updatedAt:el.updatedAt
       }
       return result;
     })
     setData(mapData)
     return mapData

    }catch(err){
      
      console.error(err)
    }
  }
  
    useEffect(()=>{
      
    asyncFc().then(data =>{
      setData(data)
    // isFetching
    setIsloading(false)
   });
    
    },[])
    useEffect(()=>{
      console.log(123)
      console.log(data)
      if(data) {
        const{name,image,desc,createrAddress,updateAt, tokenId} = data[0];
        console.log(name)
        // const image = metadata.image?.replace("ipfs://ipfs/","https://ipfs.moralis.io:2053/ipfs/").replace("ipfs://","https://ipfs.moralis.io:2053/ipfs/")
        setName(name);
        setImgSrc(image);
        setDsec(desc);
        setCreater(createrAddress);
        setUpdateAt(updateAt);
        setTokenId(tokenId);
  }
    },[data])
    
  // const{name,metadata,desc,createrAddress,updateAt, tokenId} = nftlist[0];
  // const image = metadata.image.replace("ipfs://ipfs/","https://ipfs.moralis.io:2053/ipfs/").replace("ipfs://","https://ipfs.moralis.io:2053/ipfs/")
  // console.log(name,image,desc,creater,updateAt,tokenId)

  return (    
    <div>
      {!isloading &&
      <>
      <NavBar />
      <Main>
        <Section>
          <Frame>
            <Image src={imgSrc}></Image>
            <Image_Name>{name}</Image_Name>
          </Frame>
        </Section>
        <Text_Layout>
          <Text_Layout_Section>
            <Text_Layout_title>
              <DescriptionLayout_span>{desc}</DescriptionLayout_span>
              <Creater>By {creater}</Creater>
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
              <Creater>Owned by {creater}</Creater>
              <a
                href={`https://etherscan.io/address/${tokenId}`}
                target="_blank"
              >
                <Creater>{ tokenId}</Creater>
              </a>
            </Text_Layout_title>
            <P>Sale ends {updateAt}</P>
          </Text_Layout_Section>
        </Text_Layout>
      </Main>
      <Footer />
      </>
    }
    </div>
    
  );
}
