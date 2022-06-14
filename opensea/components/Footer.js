import styled from "styled-components";
import Link from "next/link";

const Foot = styled.div`
  background-color: #1f2023;
  color: #dddd;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.a`
  cursor: pointer;
  font-size: 2em;
  color: #dddd;
  font-family: "Palatino Linotype";
  font-weight: 600;
`;

const MoveGithub = styled.img`
  width: 2em;
  height: 2em;
`;

export const Footer = () => {
  return (
    <Foot>
      <div>
        <Link href="/">
          <Title>4rontsea</Title>
        </Link>
        <div>Copyright © 2022 . All rights reserved.</div>
      </div>
      <div>
        <a target="_blank" href="https://github.com/codestates/beb-04-first-04">
          <MoveGithub src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </a>
      </div>
    </Foot>
  );
};
