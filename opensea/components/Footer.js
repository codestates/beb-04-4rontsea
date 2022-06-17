import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// github같은 브랜드 아이콘은 free-brands-svg-icons를 추가로 설치해야함
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
// blog Box 설정하기위한 useState
import { useState } from "react";

const Foot = styled.div`
  background-color: #1f2023;
  color: #dddd;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.a`
  cursor: pointer;
  font-size: 2em;
  color: #dddd;
  font-family: "Palatino Linotype";
  font-weight: 600;
`;

const MoveGithub = styled.a`
  font-size: 2em;
  margin-right: 20px;
`;

const MoveBlog = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px;
`;

const Blog = styled.a``;

const BlogBox = styled.div`
  ${Blog} {
    line-height: 1.5em;
    :hover {
      color: aliceblue;
    }
  }
  display: flex;
  // on off 설정위한 props 삽입
  visibility: ${(props) => (props.className == "on" ? "visible" : "hidden")};
  flex-direction: column;
  position: absolute;
  right: 20px;
  margin-bottom: 160px;
  padding: 20px;
  border: 1px solid #ffff;
`;

export const Footer = () => {
  const [pageOn, setPageOn] = useState(false);
  const onMouseEnter = (e) => {
    setPageOn(true);
  };
  const onMouseLeave = (e) => {
    setPageOn(false);
  };

  return (
    <Foot>
      <div>
        <Link href="/">
          <Title>4rontsea</Title>
        </Link>
        <div>Copyright © 2022 . All rights reserved.</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MoveGithub
          target="_blank"
          href="https://github.com/codestates/beb-04-first-04"
        >
          <FontAwesomeIcon icon={faGithub} />
        </MoveGithub>
        <MoveBlog
          onMouseEnter={(e) => onMouseEnter(e)}
          onMouseLeave={(e) => onMouseLeave(e)}
        >
          <FontAwesomeIcon icon={faBlog} style={{ fontSize: "2em" }} />
          <BlogBox className={pageOn ? "on" : "off"}>
            <Blog target="_blank" href="https://minwoogramer.tistory.com/">
              https://minwoogramer.tistory.com/
            </Blog>
            <Blog target="_blank" href="https://hellocrypto.hashnode.dev/">
              https://hellocrypto.hashnode.dev/
            </Blog>
            <Blog target="_blank" href="https://velog.io/@ge5rg2">
              https://velog.io/@ge5rg2
            </Blog>
            <Blog target="_blank" href="https://velog.io/@genius_jihyepark">
              https://velog.io/@genius_jihyepark
            </Blog>
          </BlogBox>
        </MoveBlog>
      </div>
    </Foot>
  );
};
