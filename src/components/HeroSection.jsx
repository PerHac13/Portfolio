import MButton from "./Button";

function HeroSection() {
  return (
    <div className="m-0">
      <div className="text-white">Hola , I am SHAIKH ABDULLAH</div>
      <div className=""> Image</div>
      <MButton
        text="Reach Out To Me"
        bgColor="primary"
        hoverBgColor="primary"
        textColor="black"
        hoverTextColor="black"
        font="bold"
      />
    </div>
  );
}
export default HeroSection;
