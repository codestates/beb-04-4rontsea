import { NavBar } from "../components/NavBar";

import { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import { CONTRACT } from "../components/Contract";
import erc721Abi from "../component2/erc721Abi";
import { ethers } from "ethers";

import { NFTStorage, File } from "nft.storage";

const Btn = styled.a`
  border-radius: ${(props) => (props.primary ? "20px" : "")};
  width: ${(props) => (props.primary ? "6em" : "2em")};
  opacity: ${(props) => (props.primary ? "0.9" : "0.8")};
  color: #dddd;
  font-size: 1.5em;
  font-weight: 500;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-left: 20px;
  transition: 0.2s;
  :hover {
    font-weight: 700;
    opacity: 1;
  }
  cursor: pointer;
  height: 2em;
`;

export default function MintNFT() {
  const NFT_STORAGE_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNmNDdkN0ZBNzkzRDBlMzI5ZWFkMUJkNjJmOTY4MDkwNTQxNUMzRDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NTI3MjgzMTYzNiwibmFtZSI6IjRyb250c2VhIn0.mhrf7qoKsQoQozV8FaooTTtubzizxkI8vt6cf9CJqjU";

  const [isImageUploaded, setImageUploaded] = useState(false);
  const [isdataURL, setdataURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState(null);

  const [name, setName] = useState("4rontsea");
  const [desc, setDesc] = useState("This is a 4frontsea NFT");

  const [currentUser, setCurrentUser] = useState("");
  const [tx, setTx] = useState("");
  const openSeaURL = "https://testnets.opensea.io/collection/frontsea-nft";

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      console.log("이더리움 오브젝트", ethereum);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setCurrentUser(account);
      console.log("현재 계정:", account);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (f) => {
    console.log("image uploaded!", f.target.files[0]);
    setImageUploaded(f.target.files[0]);
    console.log(isImageUploaded, "이미지");
    try {
      const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
      const imageFile = new File([f.target.files[0]], "nft.fbx", {
        type: "image/fbx",
      });
      const imgURL = URL.createObjectURL(f.target.files[0]);
      setdataURL(imgURL);
      console.log(imgURL, "이미지이빈다");
      console.log("Sending NFT to IPFS");
      setLoading(true);

      const metadata = await client.store({
        name: name,
        description: desc,
        image: imageFile,
      });
      //bafybeibgfe2owpvqod6os7uix2nvbpv2u42wxw4a6np6gh47pstyghk32a/nft.png path이름
      setLoading(false);
      console.log("Completed sending NFT to IPFS", metadata);
      console.log(metadata.url);
      setMetadata(metadata);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const mint = async (e) => {
    e.preventDefault();

    if (isImageUploaded == false) {
      alert("Upload image first and wait!");
    } else {
      try {
        console.log("Trying to mint!");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT, erc721Abi, signer);
        console.log(currentUser, metadata.url);
        const txn = await contract.mintNFT(currentUser, metadata.url);
        console.log(txn);
        setTx("https://rinkeby.etherscan.io/tx/" + txn.hash);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <h1>NFT 발행</h1>
          {!currentUser ? (
            <div onClick={connectWallet}>
              Please connect your wallet:
              <Btn>
                <FontAwesomeIcon icon={faWallet} />
              </Btn>
            </div>
          ) : (
            <>
              <div>{`Your Address: ${currentUser}`}</div>
              <form>
                <div>
                  <div>
                    <label>이름</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={name}
                      required
                    />
                  </div>
                  <div>
                    <label>설명</label>
                    <textarea
                      onChange={(e) => setDesc(e.target.value)}
                      value={desc}
                      required
                    />
                  </div>
                  <label>파일업로드</label>
                  <input
                    onChange={uploadImage}
                    type="file"
                    accept="image/*"
                    required
                  ></input>
                  {isImageUploaded
                    ? loading
                      ? "Loading image to IPFS..."
                      : "Upload complete!"
                    : null}
                </div>
                {metadata === null ? (
                  "Upload Image please"
                ) : (
                  <button onClick={mint}>발행</button>
                )}
                {tx ? (
                  <>
                    <div>
                      Your{" "}
                      <a href={tx} target="_blank" rel="noreferrer noopener">
                        transaction (CLICK ME)
                      </a>
                    </div>
                    <div>
                      Check out the{" "}
                      <a
                        href={openSeaURL}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        testnet opensea (CLICK ME)
                      </a>
                    </div>
                  </>
                ) : null}
              </form>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          height: "50%",
          width: "50%",
        }}
      >
        <img src={isdataURL} />
        {/* {loading ?metadata.data.image.pathname?.map((metadata, index) => {
                return (
                  <div key={index}>
                        <img
                          src={metadata.image
                          }
                          style={{
                            maxHeight: "300px",
                            maxWidth: "300px",
                          }}
                        ></img>
                   
                  </div>
                );
              }):null } */}
      </div>
    </div>
  );
}
