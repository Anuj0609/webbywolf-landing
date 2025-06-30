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

export const metadata = {
  title: "Your Landing Page Title",
  description: "Your landing page description for SEO.",
};

export default function Home() {
  

  return (
    <div>
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
