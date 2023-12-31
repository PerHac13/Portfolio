function SideBar() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);

  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div
      className="fixed top-0 left-0 h-screen w-[6.5vw] m-0  justify-between text-xl font-medium
                        flex flex-col
                        bg-primary text-secondary shadow-md font-secondary py-20 "
    >
      <div className="basis-1/5  cursor-pointer">
        <a href="#">
          <div className="-rotate-90 ">SHAIKH</div>
        </a>
      </div>
      <div className="basis-1/5 cursor-pointer">
        <a href="">
          <div className="-rotate-90">WORK</div>
        </a>
      </div>
      <div className="basis-1/5 cursor-pointer">
        <a href="">
          <div className="-rotate-90">ABOUT</div>
        </a>
      </div>
      <div className="basis-1/5 cursor-pointer">
        <a href="">
          <div className="-rotate-90">CONTACT</div>
        </a>
      </div>
      <div className="basis-1/5 flex justify-between items-center flex-col">
        <a className="cursor-pointer" href="https://github.com/PerHac13">
          <img
            src="./github.svg"
            className="h-12 opacity-90"
            alt="./github.svg"
          ></img>
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/ashaikh13iiitbh26/"
        >
          <img
            src="./linkedin.svg "
            className="h-9 opacity-90"
            alt="./linkedin.svg"
          ></img>
        </a>
        <a
          className="cursor-pointer"
          href="mailto:shaikh.2201027cs@iiitbh.ac.in"
        >
          <img
            src="./mail.svg"
            className="h-9 opacity-90"
            alt="./mail.svg"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
// gap-24 py-[40px]
