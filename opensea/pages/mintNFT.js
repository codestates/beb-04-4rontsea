import { NavBar } from "../components/NavBar";

import { Moralis } from 'moralis';

uploadImage = async() =>{
  const data = fileInput.files[0]
  const file = new Moralis.File(data.name, data)
  await file.saveIPFS();
  console.log(file.ipfs(), file.hash())

  return file.ipfs();
}

uploadMetadata = async(imageURL) =>{
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
gogogo = async () =>{
  const image = await uploadImage();
  await uploadMetadata(image)
  console.log(uploadImage);
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
          <button onClick={gogogo}>발행</button>
        </form>
      </div>
    </div>
  );
}
