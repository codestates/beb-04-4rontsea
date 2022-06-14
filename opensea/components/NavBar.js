import Link from "next/link";
//https://www.kindacode.com/article/how-to-use-font-awesome-icons-in-next-js/ nextJS fontawesome 참고
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
// NextJS styled-components https://record22.tistory.com/128
import styled from "styled-components";
import { useEffect } from "react";

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

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      console.log('이더리움 오브젝트', ethereum);
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];
      console.log('현재 계정:', account);
    } catch (error) {
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
        </div>
      </Nav>
    </Header>
  );
};
