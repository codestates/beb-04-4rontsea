import { NavBar } from "../components/NavBar";


function upload() {
  const reader = new FileReader();
  reader.onloadend = function() {
    const ipfs = window.IpfsApi('localhost', 5001) // Connect to IPFS
    const buf = buffer.Buffer(reader.result) // Convert data into buffer
    ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
      if(err) {
        console.error(err)
        return
      }
      let url = `https://ipfs.io/ipfs/${result[0].hash}`
      console.log(`Url --> ${url}`)
      document.getElementById("url").innerHTML= url
      document.getElementById("url").href= url
      document.getElementById("output").src = url
    })
  }
  const photo = document.getElementById("photo");
  reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
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
            <button onClick={upload()} id="photo" type="file" accept="image/*" require></button>
          </fieldset>
          <div>
            <label>설명</label>
            <textarea required></textarea>
          </div>
          <div>
            <label>이름</label>
            <input type="text" required></input>
          </div>
          <button>발행</button>
        </form>
      </div>
    </div>
  );
}
