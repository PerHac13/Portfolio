function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-[6.5vw] m-0  justify-between text-xl font-medium
                        flex flex-col
                        bg-primary text-secondary shadow-md font-secondary py-20"
    >
      <div className="basis-1/5 ">
        <div className="-rotate-90 ">SHAIKH</div>
      </div>
      <div className="basis-1/5 ">
        <div className="-rotate-90">WORK</div>
      </div>
      <div className="basis-1/5 ">
        <div className="-rotate-90">ABOUT</div>
      </div>
      <div className="basis-1/5 ">
        <div className="-rotate-90">CONTACT</div>
      </div>
      <div className="basis-1/5 flex justify-center items-center flex-col">
        <div className="">f</div>
        <div className="">i</div>
        <div className="">g</div>
      </div>
    </div>
  );
}

export default SideBar;
// gap-24 py-[40px]
