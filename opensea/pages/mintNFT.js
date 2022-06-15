import { NavBar } from "../components/NavBar";
import { Moralis } from 'moralis';
import erc721Abi from '../component2/erc721Abi';
import { ethers } from 'ethers';

const uploadImage = async() =>{
  const data = fileInput.files[0]
  const file = new Moralis.File(data.name, data)
  await file.saveIPFS();
  console.log(file.ipfs(), file.hash())

  return file.ipfs();
}

const uploadMetadata = async(imageURL) =>{
  const name = document.getElementById('metadataName').value;
  const description = document.getElementById('metadataDesc').value;
  
  const metadata = {
    "name": name,
    "description": description,
    "image" : imageURL
  }
  const file = new Moralis.File("file.json", {base64 : btoa(JSON.stringify(metadata))});
  await file.saveIPFS();
   
}
const gogogo = async () =>{
  const image = await uploadImage();
  await uploadMetadata(image)
  console.log(uploadImage);
}

const mintNFT = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract('0x7D7F8b209415c76a8B0603540775389124562fEf', erc721Abi, signer);
  const NFTURL = gogogo;
  try {
    console.log(currentUser, URI);
    const txn = await contract.mintNFT(currentUser,  NFTURL );//ipfs이용해서 받은 이미지URL을 때려박으면됌
    //버튼을 눌렀을때 이미지URL로 변화하는 작업이랑 메타데이터같이 ㅇ로라
    //const txn = await contract.tokenURI(1);
    console.log(txn);
  }
  catch (error) {
    console.log(error);
  }
}


export default function MintNFT() {
 
  return (
    <div>
      <NavBar />
      <div>
        <h1>NFT 발행</h1>
        <form>
          <fieldset>
            <legend>파일업로드</legend>
            <input type="file" name="fileInput" id="fileInput"></input>
          </fieldset>
          <div>
            <label>설명</label>
            <textarea type="text" name="metadataDesc" id ="metadataDesc" placeholder="please descript NFT" cols="30" row="10"></textarea>
          </div>
          <div>
            <label>이름</label>
            <input type="text" name="metadataName" id ="metadataName" required></input>
          </div>
          <button onClick={mintNFT}>발행</button>
        </form>
      </div>
    </div>
  );
}
