import About from "@/components/About";
import Advertisement from "@/components/Advertisement";
import Brand from "@/components/Brand";
import Contact from "@/components/Contact";
import Details from "@/components/Details";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Join from "@/components/Join";
import PreFooter from "@/components/PreFooter";
import Promises from "@/components/Promises";
import Quotation from "@/components/Quotation";
import Services from "@/components/Services";
import Story from "@/components/Story";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="/Bg-Graphic1.svg"
        style={{
          position: "absolute",
          top: "1300.48px",
          left: "314.72px",
          width: "3072.67px",
          height: "1037.36px",
          zIndex: 11,
          pointerEvents: "none",
        }}
        alt=""
      />
      <img
        src="/Bg-Graphic2.svg"
        style={{
          position: "absolute",
          top: "4729px",
          left: "80px",
          width: "1280px",
          height: "1444px",
          zIndex: -2,
          pointerEvents: "none",
        }}
        alt=""
      />
      <img
        src="/Bg-Graphic3.svg"
        style={{
          position: "absolute",
          top: "8050.36px",
          left: "148.03px",
          width: "3000.72px",
          height: "941.16px",
          zIndex: 11,
          pointerEvents: "none",
        }}
        alt=""
      />

      <Hero />
      <About />
      <Contact />
      <Information />
      <Brand />
      <Details />
      <Advertisement />
      <Quotation />
      <Download />
      <Gallery />
      <Feature />
      <Join />
      <Promises />
      <Services />
      <Story />
      <Faq />
      <PreFooter />
      <Footer />
    </div>
  );
}
