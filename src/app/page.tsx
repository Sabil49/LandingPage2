import Header from "./Header/page";
import Banner from "./Banner/page";
import Dashboard from "./Dashboard/page";
import BrandAnimate from "./BrandAnimate/page";
import Features from "./Features/page";
import Llm from "./LLM/page";
import Services from "./Services/page";
import Testimonials from "./Testimonials/page";
import Footer from "./Footer/page";
import ScrollTriggered from "../../public/Components/EmojiAnimation";

export default function Home() {
  return (
    <div className="container w-full m-auto max-w-[100%] relative">
      <Header />
      <div className="container !w-[95%] m-auto">
      <Banner />
      <Dashboard />
      <BrandAnimate />
      <Features />
      <Llm />
      <Services />
      <Testimonials />
      </div>
      <Footer />  
    </div>
  );
}
