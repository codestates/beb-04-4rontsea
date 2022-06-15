import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import styled from "styled-components";
// 반응형은 내일... 🔥

const Main = styled.main`
  min-height: calc(100vh - 315px);
  padding-bottom: 120px;
  position: relative;
  background-color: #121120;
`;

const Section = styled.div`
  text-align: center;
`;

const Frame = styled.div`
  padding: 120px 0px 60px 0px;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  // 크기 제한
  max-width: 35%;
`;

const Image = styled.img`
  box-shadow: 10px 10px 30px rgb(0 0 0 / 10%);
  max-width: 80%;
  max-height: 80%;
  min-width: 50%;
  min-height: 50%;
  border-radius: 10px;
`;

const Image_Name = styled.div`
  color: #ffff;
  font-size: 2em;
  font-weight: 600;
`;

const Text_Layout = styled.div`
  margin: 0px 120px;
  display: flex;
  flex-direction: column;
`;

const Text_Layout_Section = styled.div`
  min-width: 300px;
  min-height: 50%;
  color: #ffff;
`;

const Text_Layout_title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
`;

const Creater = styled.span`
  color: #08b7ff;
  border: 1px solid #08b7ff;
  border-radius: 20px;
  margin-left: 10px;
  padding: 0.5em;
`;

const DescriptionLayout_span = styled.span`
  font-size: 2em;
  font-weight: 600;
`;

const P = styled.p`
  margin-left: 10px;
`;

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main>
        <Section>
          <Frame>
            <Image src="https://lh3.googleusercontent.com/PhIVfGFb5ps9Tml1Bu8GCgp_wi1FF-vPCa0jRWfmQ62QyPgUS4HIBRne8CQeG8HrMVegUicOgLywS-cBL7JnGBmVuZfqnT7GtTQdGA=w600"></Image>
            <Image_Name>Primate #6161</Image_Name>
          </Frame>
        </Section>
        <Text_Layout>
          <Text_Layout_Section>
            <Text_Layout_title>
              <DescriptionLayout_span>Description</DescriptionLayout_span>
              <Creater>By CvZY2t</Creater>
            </Text_Layout_title>
            <P>
              Collection of 10,000 Primates facilitating a seamless adoption of
              the web3 space through community fueled ventures and
              collaborations.
            </P>
          </Text_Layout_Section>
          <Text_Layout_Section>
            <Text_Layout_title>
              <DescriptionLayout_span>Details</DescriptionLayout_span>
              <Creater>Owned by Crypto1654</Creater>
              <a href="https://explorer.solana.com/address/87pavTNE2tPyDX1uuKfkDQvVgPYJu5hveqs44sHYdRdb">
                <Creater>Token ID</Creater>
              </a>
            </Text_Layout_title>
            <P>Sale ends July 15, 2022 at 4:02pm GMT+9</P>
          </Text_Layout_Section>
        </Text_Layout>
      </Main>
      <Footer />
    </div>
  );
}
