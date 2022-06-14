import { NavBar } from "../components/NavBar";

export default function MintNFT() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>NFT 발행</h1>
        <form>
          <div>
            <label>파일업로드</label>
            <input type="file" accept="image/*" require></input>
          </div>
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
