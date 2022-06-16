import { NavBar } from "../components/NavBar";
import { Thumbnail } from "../components/Thumbnail";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <Thumbnail />
      <Link href="/detail">
        <a>Detail</a>
      </Link>
      <Footer />
    </>
  );
}
