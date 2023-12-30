import { useState } from "react";
import PropTypes from "prop-types";

const SkillBox = ({ logo, logoName, description }) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={`my-4 mx-6 p-8 bg-primary rounded-2xl transition-all transform ${
        isHovered ? "shadow-md hover:scale-105" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{ width: "230px", height: "350px" }}
    >
      <div className="flex flex-wrap items-center justify-center ">
        <div className="mb-2 mr-2 bg-transparent">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
            className="shadow-lg p-0 m-0 bg-transparent"
          />
        </div>
        <div className="flex items-center justify-center ">
          <h3 className="text-black font-bold text-2xl ">{logoName}</h3>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-black font-medium">{description}</p>
      </div>
    </div>
  );
};

SkillBox.propTypes = {
  logo: PropTypes.string.isRequired,
  logoName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SkillBox;
