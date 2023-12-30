import MButton from "./Button";

function HeroSection() {
  return (
    <div className="m-0" style={{ minHeight: "100vh" }}>
      <div className="p-20">
        <div className="flex items-center justify-center  flex-wrap pt-20">
          <div className="w-[50%]">
            <div
              style={{ WebkitTextStroke: "1px white", color: "black" }}
              className="text-5xl font-bold"
            >
              Hi there, I&apos;m
            </div>
            <div className="font-bold text-6xl md:text-8xl text-white py-3">
              SHAIKH ABDULLAH
            </div>
            <div>
              <div
                style={{
                  WebkitTextStroke: "0.8px white",
                  color: "black",
                }}
                className="text-4xl font-bold "
              >
                Web Developer
              </div>
              <div
                style={{
                  WebkitTextStroke: "0.8px white",
                  color: "black",
                  zIndex: "2",
                }}
                className="text-4xl font-bold"
              >
                & Programmer &
              </div>
              <div
                style={{ WebkitTextStroke: "0.8px white", color: "black" }}
                className="text-4xl font-bold"
              >
                Cybersecurity Enthusiast
              </div>
            </div>
            <div
              className="font-medium text-2xl text-white pb-10 pt-20"
              style={{ maxWidth: "25rem" }}
            >
              Driven by insatiable curiosity, I&apos;m a student at IIIT
              Bhagalpur, exploring the realms of development and cybersecurity
              to shape a dynamic future.
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <div>
              <img src="./working-sticker.png" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center  flex-wrap pt-20">
          <div className="w-[50%]">
            <MButton
              text="Reach Out To Me"
              textColor="black"
              hoverTextColor="black"
              bgColor="bg-primary"
              hoverBgColor="ternary"
              font="bold"
            />
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <MButton
              text="See my Work"
              textColor="white"
              hoverTextColor="white"
              bgColor="bg-ternary"
              hoverBgColor=""
              font="bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
