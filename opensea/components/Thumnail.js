/**
 * npm i react-responsive-carousel
 * "react-responsive-carousel",
 */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"; 

export const Thumnail = () => {
  return (
    <div className="carousel">
      {/* 사용법 : https://www.npmjs.com/package/react-responsive-carousel */}
      <Carousel 
       autoPlay
       infiniteLoop
       showIndicators={false}
       showThumbs={false}
       showStatus={false}
       interval={5000}
      >
        <div>
          <img src="https://nft-content.upbit.com/3c562a1c-6ef8-4227-9798-f1548e327a8e" />
          <div className="legend">미디어아트로 재탄생한 고미술의 길상 문양 김혜경 </div>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/22138fc1-2225-4fd1-87cf-a660368a0f02" />
          <p className="legend">점으로 그리는 세상 작가 노영미</p>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/7deb5a52-d765-4c5a-bbfa-68782f0211b8" />
          <p className="legend">작가 신모래 추억 속의 어느 날</p>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/b9c976cc-a12f-4a05-b74e-a3fc4e566965" />
          <p className="legend">압도하는 모노드로잉의 세계 작가 권민호</p>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/a274e8c6-a07a-4af2-acf8-87fdbc73f2d6" />
          <p className="legend" href="https://upbit.com/nft/">4RONTSEA NFT 알아보기 NFT 서비스 이용방법을 확인해보세요 </p>
        </div>
      </Carousel>
    </div>
  );
};
