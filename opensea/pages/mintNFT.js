import { NavBar } from "../components/NavBar";
import { NFTStorage, File } from 'nft.storage'
import { useState } from "react";

import { CONTRACT } from '../components/Contract';
import erc721Abi from '../component2/erc721Abi';
import { ethers } from 'ethers';

export default function MintNFT() {

  const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNmNDdkN0ZBNzkzRDBlMzI5ZWFkMUJkNjJmOTY4MDkwNTQxNUMzRDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NTI3MjgzMTYzNiwibmFtZSI6IjRyb250c2VhIn0.mhrf7qoKsQoQozV8FaooTTtubzizxkI8vt6cf9CJqjU'

  const [isImageUploaded, setImageUploaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [metadata, setMetadata] = useState(null)
  
  const [name, setName] = useState("4rontsea")
  const [desc, setDesc] = useState("This is a 4frontsea NFT")

  const [currentUser, setCurrentUser] = useState("0x6E6d266943Fa4Dd3676335510d07C190D8F65702");

  const uploadImage = async (f) => {
    console.log("image uploaded!", f.target.files[0])
    setImageUploaded(f.target.files[0]);

    try {
      const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })
      const imageFile = new File([ f.target.files[0] ], 'nft.png', { type: 'image/png' })

      console.log("Sending NFT to IPFS")
      setLoading(true)

      const metadata = await client.store({
        name: name,
        description: desc,
        image: imageFile
      })

      setLoading(false)
      console.log("Completed sending NFT to IPFS", metadata)
      console.log(metadata.url)
      setMetadata(metadata)
    } catch (e) {
      console.log("Error: ", e)
    }
  }
  
  const mint = async (e) => {
    e.preventDefault();

    if (isImageUploaded == false) {
      alert("Upload image first and wait!")
    } else {
        try {
          console.log("Trying to mint!")
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(CONTRACT, erc721Abi, signer);
          console.log(currentUser, metadata.url);
          const txn = await contract.mintNFT(currentUser, metadata.url);
          console.log(txn);
        }
        catch (error) {
          console.log(error);
        }
    }
  }

  return (
    <div>
      <NavBar />
      <div>
        <h1>NFT 발행</h1>
        <form>
          <div>
            <label>파일업로드</label>
            <input onChange={uploadImage} type="file" accept="image/*" required></input>
            {
              isImageUploaded ?
              loading ? "Loading image to IPFS..." : "Upload complete!"
                : null
            }
          </div>
          <div>
            <label>이름</label>
            <input onChange={(e) => setName(e.target.value)} type="text" value={name} required />
          </div>
          <div>
            <label>설명</label>
            <textarea onChange={(e) => setDesc(e.target.value)} value={desc} required />
          </div>
          { !loading && currentUser ? <button onClick={mint}>발행</button> : "Connect Wallet & Upload Image please" }
        </form>
      </div>
    </div>
  );
}
