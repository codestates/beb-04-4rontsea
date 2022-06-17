import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import Link from "next/link";
import { Lists } from "../components/Lists";
import { Thumbnail } from "../components/Thumbnail";

export default function Home() {
  return (
    <>
      <NavBar />
      <Thumbnail />
      <Lists />
      <Footer />
    </>
  );
}
