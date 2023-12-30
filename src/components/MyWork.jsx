import MButton from "./Button";
function MyWork() {
  return (
    <section id="work" className="p-20 ">
      <div className="">
        <div className="bg-secondary sm:bg-transparent  justify-start ">
          <div className="text-center sm:basis-1/2 text-white text-8xl font-bold w-[50%]">
            My Work
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  flex-wrap pt-20">
        <div className="w-[50%]">
          <div
            style={{ WebkitTextStroke: "1px white", color: "black" }}
            className="text-5xl font-bold"
          >
            01 .
          </div>
          <div className="font-bold text-6xl md:text-8xl text-white py-3">
            Jotion
          </div>
          <div>
            <div
              style={{
                WebkitTextStroke: "0.8px white",
                color: "white",
              }}
              className="text-xl font-bold "
            >
              TypeScript, Nextjs, Convex, Clerk
            </div>
          </div>
          <div
            className="font-medium text-xl text-white pb-10 pt-20"
            style={{ maxWidth: "25rem" }}
          >
            This project aims to replicate the core features of Notion while
            providing a powerful and flexible framework for building
            collaborative note-taking and documentation platforms.
          </div>
          <div className="flex items-left justify-start  flex-wrap pt-5">
            <div className=" px-5 shadow-lg">
              <a
                className="cursor-pointer"
                href="https://jotion-note-taking-app-sigma.vercel.app/"
              >
                <MButton
                  text="Go to Website"
                  textColor="black"
                  hoverTextColor="black"
                  bgColor="bg-primary"
                  hoverBgColor="ternary"
                  font="semibold"
                />
              </a>
            </div>
            <div className="px-5 shadow-lg">
              <a
                className="cursor-pointer"
                href="https://github.com/PerHac13/jotion"
              >
                <MButton
                  text="Github Repo."
                  textColor="white"
                  hoverTextColor="white"
                  bgColor="bg-[#252525]"
                  hoverBgColor="ternary"
                  font="semibold"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="">
            <img src="./jotion.png" className="h-[200%]" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  flex-wrap pt-20">
        <div className="w-[50%]">
          <div
            style={{ WebkitTextStroke: "1px white", color: "black" }}
            className="text-5xl font-bold"
          >
            02 .
          </div>
          <div className="font-bold text-6xl md:text-8xl text-white py-3">
            Portfolio
          </div>
          <div>
            <div
              style={{
                WebkitTextStroke: "0.8px white",
                color: "white",
              }}
              className="text-xl font-bold "
            >
              Tailwind, Reactjs
            </div>
          </div>
          <div
            className="font-medium text-xl text-white pb-10 pt-20"
            style={{ maxWidth: "25rem" }}
          >
            Embark on a journey through my portfolio site, meticulously crafted
            with React and styled using Tailwind CSS. Explore diverse projects
            that reflect my evolution and growth in the dynamic realm of web
            development.
          </div>
          <div className="flex items-left justify-start  flex-wrap pt-5">
            <div className=" px-5 shadow-lg">
              <a
                className="cursor-pointer"
                href="https://perhac13.github.io/Portfolio/"
              >
                <MButton
                  text="Go to Website"
                  textColor="black"
                  hoverTextColor="black"
                  bgColor="bg-primary"
                  hoverBgColor="ternary"
                  font="semibold"
                />
              </a>
            </div>
            <div className="px-5 shadow-lg">
              <a
                className="cursor-pointer"
                href="https://github.com/PerHac13/Portfolio"
              >
                <MButton
                  text="Github Repo."
                  textColor="white"
                  hoverTextColor="white"
                  bgColor="bg-[#252525]"
                  hoverBgColor="ternary"
                  font="semibold"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="">
            <img src="./portfolio.png" className="h-[200%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWork;
