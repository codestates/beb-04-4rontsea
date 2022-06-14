import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Thumnail = () => {
  return (
    <div>
      <Carousel>
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
