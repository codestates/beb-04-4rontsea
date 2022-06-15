/**
 * nom i react-responsive-carousel
 * "react-responsive-carousel": "^3.2.20",
 */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"; 
import styled from "styled-components";

const CaroStyle = styled.div `
.carousel .control-dots .dot
{
    background: #82C6E3;
    box-shadow: 0px 4px 8px rgba(76, 166, 205, 0.2);
    width:16px;
    height:16px;
}
.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover
{
    opacity:1;filter:alpha(opacity=100);
    width:18px;
    height:18px;
}
`;

export const Thumnail = ({ intervalMS,showArrows, description, fname, title, lname, avatarSrc,...props}) => {
  return (
    <div className="carousel">
      {/* 사용법 : https://www.npmjs.com/package/react-responsive-carousel */}
      <Carousel 
       showArrows={showArrows}
       infiniteLoop={true}
       showThumbs={false}
       showStatus={false}
       autoPlay={true}
       interval={intervalMS}//6100
      >
        <div>
          <img src="https://nft-content.upbit.com/3c562a1c-6ef8-4227-9798-f1548e327a8e" />
          <p className="legend">압도하는 모노드로잉의 세계</p>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/22138fc1-2225-4fd1-87cf-a660368a0f02" />
          <p className="legend">점으로 그리는 세상</p>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/7deb5a52-d765-4c5a-bbfa-68782f0211b8" />
          <p className="legend">작가 신모래</p>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/b9c976cc-a12f-4a05-b74e-a3fc4e566965" />
          <p className="legend">미디어로 그리는 세상</p>
        </div>
        <div>
          <img src="https://nft-content.upbit.com/a274e8c6-a07a-4af2-acf8-87fdbc73f2d6" />
          <p className="legend">업비트 NFT 활용하기</p>
        </div>
      </Carousel>
    </div>
  );
};
