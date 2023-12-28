import "./Home.scss";
import HeroSection from "./HeroSection";
import MyWork from "./MyWork";
import MySkill from "./MySkill";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="header absolute left-[6.5vw]  w-[95.5vw] m-0 ">
      <div className="bg-red-900">
        <div className="text-5xl font bold text-center py-40 animate-pulse z-50 text-white">
          Work in Progress!!
        </div>
      </div>
      <HeroSection />
      <MyWork />
      <MySkill />
      <TechStack />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
