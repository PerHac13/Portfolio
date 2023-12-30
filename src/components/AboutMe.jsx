function AboutMe() {
  return (
    <>
      <div className="">
        <div className="bg-secondary sm:bg-transparent  justify-start ">
          <div className="text-center sm:basis-1/2 text-primary text-8xl font-bold w-[50%]">
            About Me
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-20">
        <div className="bg-primary rounded-lg p-2 shadow-lg w-[40%]">
          <div className="bg-black rounded-lg p-10 flex items-center justify-center">
            <img src="./face-sticker.png" />
            <div className="px-10 ">
              <div className="text-white text-left font-medium ">
                &quot; As a highly motivated and inquisitive professional, I
                possess an innate passion for design that extends across various
                disciplines. Embracing an autodidactic approach, I consistently
                maintain a positive and ego-free demeanor in all aspects of my
                work. My commitment to excellence is underscored by a robust
                work ethic that permeates every endeavor, ensuring a steadfast
                dedication to achieving superior outcomes.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
