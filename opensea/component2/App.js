import TokenList from "./TokenList";
import { useState } from "react";

export function App () {
	const [erc721list, setErc721list] = useState([]);  // 자신의 NFT 정보를 저장할 토큰

	const addNewErc721Token = async () => {
		// 생략
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            newErc721addr
        );
        const name = await tokenContract.methods.name().call();
        const symbol = await tokenContract.methods.symbol().call();
        const totalSupply = await tokenContract.methods.totalSupply().call();
			let arr = [];
		  for (let i = 1; i <= totalSupply; i++) {
		      arr.push(i);
		  }
		  
		  for (let tokenId of arr) {
		      let tokenOwner = await tokenContract.methods
		          .ownerOf(tokenId)
		          .call();
		      if (String(tokenOwner).toLowerCase() === account) {
		          let tokenURI = await tokenContract.methods
		              .tokenURI(tokenId)
		              .call();
		          setErc721list((prevState) => {
		              return [...prevState, { name, symbol, tokenId, tokenURI }];
		          });
		      }
		  }
          return(<div className="App">
            <div className="newErc721">
	    <input
	        type="text"
	        onChange={(e) => {
	            setNewErc721addr(e.target.value);  // 입력받을 때마다 newErc721addr 갱신
	        }}
	    ></input>
	    <button onClick={addNewErc721Token}>add new erc721</button>
	</div>
            <TokenList erc721list={erc721list}/>
          </div>

          )
	}
}