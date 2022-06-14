import Link from "next/link";
//https://www.kindacode.com/article/how-to-use-font-awesome-icons-in-next-js/ nextJS fontawesome 참고
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
// NextJS styled-components https://record22.tistory.com/128
import styled from "styled-components";

const Header = styled.header`
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 80px;
  background-color: #dddd;
  position: fixed;
`;

const Title = styled.a`
  cursor: pointer;
  font-size: 3em;
  color: #1175e7;
  font-family: "Palatino Linotype";
  font-weight: 600;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
`;

const Menu = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const Btn = styled.a`
  border-radius: ${(props) => (props.primary ? "20px" : "")};
  width: ${(props) => (props.primary ? "6em" : "2em")};
  opacity: ${(props) => (props.primary ? "0.9" : "0.8")};
  color: #1f2023;
  font-size: 1.5em;
  font-weight: 500;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-left: 20px;
  transition: 0.2s;
  :hover {
    opacity: 1;
    font-weight: 650;
  }
  cursor: pointer;
  height: 2em;
`;

export const NavBar = () => {
  return (
    <Header>
      <Nav>
        <div>
          <Link href="/">
            <Title>4rontsea</Title>
          </Link>
        </div>
        <Menu>
          <Link href="/mintNFT">
            <Btn primary>Mint NFT</Btn>
          </Link>
          <Link href="/wallet">
            <Btn>
              <FontAwesomeIcon icon={faWallet} />
            </Btn>
          </Link>
        </Menu>
      </Nav>
    </Header>
  );
};
