import "./app.css";
import Navbar from "./shared/Navbar";
import Section1 from "./sections/Section1/section1";
import Section2 from "./sections/Section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import Section5 from "./sections/section5/section5";
import Section6 from "./sections/section6/section6";
import Section7 from "./sections/section7/section7";
import Section8 from "./sections/section8/Section8";
import Footer from "./shared/Footer";

export function App() {
  return (
    <>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Footer></Footer>
    </>
  );
}
