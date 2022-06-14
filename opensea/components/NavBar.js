import Link from "next/link";
//https://www.kindacode.com/article/how-to-use-font-awesome-icons-in-next-js/ nextJS fontawesome 참고
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
// NextJS styled-components https://record22.tistory.com/128
import styled from "styled-components";
import { useState } from "react";

import { CONTRACT } from './Contract';
import erc721Abi from '../component2/erc721Abi';
import { URI } from './SampleURI';
import { ethers } from 'ethers';

const Header = styled.header`
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 80px;
  background-color: #bfbfbf;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  min-width: 1280px;
  padding: 0 20px;
  height: 100%;
`;

export const NavBar = () => {

  const [currentUser, setCurrentUser] = useState("0x6E6d266943Fa4Dd3676335510d07C190D8F65702");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      console.log('이더리움 오브젝트', ethereum);
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];
      setCurrentUser(account);
      console.log('현재 계정:', account);
    } catch (error) {
      console.log(error);
    }
  }

  const mintNFT = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT, erc721Abi, signer);
    try {
      console.log(currentUser, URI);
      const txn = await contract.mintNFT(currentUser, URI);
      //const txn = await contract.tokenURI(1);
      console.log(txn);
    }
    catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   connectWallet();
  // }, []);

  return (
    <Header>
      <Nav>
        <div>
          <Link href="/">
            <a>4rontsea</a>
          </Link>
        </div>
        <div>
          <Link href="/mintNFT">
            <a>NFT발행</a>
          </Link>
          <div onClick={connectWallet}>
            <a>
              <FontAwesomeIcon icon={faWallet} />
            </a>
          </div>
          <div onClick={mintNFT}>민트 실행</div>
        </div>
      </Nav>
    </Header>
  );
};
