import { NavBar } from "../components/NavBar";
import { Thumnail } from "../components/Thumnail";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <Thumnail />
      <Link href="/detail">
        <a>Detail</a>
      </Link>
      <Footer />
    </>
  );
}
