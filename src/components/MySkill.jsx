import SkillBox from "./SkillBox";
import skillSet from "../assets/skillSet";

function MySkill() {
  return (
    <>
      <div className="pt-20">
        <div className="bg-secondary sm:bg-transparent  justify-start ">
          <div className="text-center sm:basis-1/2 text-white text-8xl font-bold w-[50%]">
            My Skill
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-20">
        <div className="bg-primary rounded-lg p-1 shadow-lg w-[70%]">
          <div className="bg-black rounded-lg p-10 flex items-center justify-center flex-wrap ">
            {skillSet.map((item, index) => (
              <SkillBox
                key={index}
                logo={item.logo}
                logoName={item.logoName}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkill;
