import { NavBar } from "../components/NavBar";
import { Thumnail } from "../components/Thumnail";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { Lists } from "../components/Lists";

export default function Home() {
  return (
    <>
      <NavBar />
      <Thumnail />
      <Lists />
      <Footer />
    </>
  );
}
