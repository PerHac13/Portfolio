import PropTypes from "prop-types";
const MButton = ({
  text,
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
  font,
}) => {
  const handleHover = (e) => {
    e.currentTarget.classList.add(
      "shadow",
      "transform",
      "-translate-y-1",
      "hover:shadow-lg"
    );
  };

  const handleLeave = (e) => {
    e.currentTarget.classList.remove(
      "shadow",
      "transform",
      "-translate-y-1",
      "hover:shadow-lg"
    );
  };

  return (
    <button
      className={`transition-all bg-${bgColor} hover:bg-${hoverBgColor} text-${textColor} hover:text-${hoverTextColor} py-2 px-4 shadow-md h-16 font-${font} text-[1.2rem]`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {text}
    </button>
  );
};
MButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  hoverTextColor: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
};
export default MButton;
