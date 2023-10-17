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
    <div className="header absolute left-[6.5vw] h-[100vh] w-[95.5vw] m-0  p-0">
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
