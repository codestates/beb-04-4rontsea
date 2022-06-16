import { NavBar } from "../components/NavBar";
import { Thumbnail } from "../components/Thumbnail";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { Lists } from "../components/Lists";

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
