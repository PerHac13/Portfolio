function AboutMe() {
  return (
    <>
      <div className="pt-30">
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
                &quot; Despite my limited experience, I&apos;m a highly
                motivated and inquisitive professional with a passion for things
                across disciplines. As a quick learner, I embrace an
                autodidactic approach, maintaining a positive demeanor.
                Committed to excellence, my robust work ethic ensures steadfast
                dedication to achieving superior outcomes in every
                endeavor.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
